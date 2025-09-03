import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xkgvqlay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        })
      });

      const result = await response.json();

      if (response.ok || result.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">Get In Touch</h2>
          <p className="text-xl text-primary-foreground/80" data-testid="text-contact-subtitle">Let's discuss opportunities and collaborations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <Mail className="w-5 h-5" />
                  <span>nataman001@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <Phone className="w-5 h-5" />
                  <span>+91-7668811351</span>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <MapPin className="w-5 h-5" />
                  <span>Punjab, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/ady-31" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  data-testid="link-contact-github"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/amandeep2011/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:nataman001@gmail.com"
                  className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  data-testid="link-contact-email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary-foreground/5 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-testid="input-contact-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-testid="input-contact-email"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  data-testid="textarea-contact-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary text-secondary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                data-testid="button-contact-submit"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
