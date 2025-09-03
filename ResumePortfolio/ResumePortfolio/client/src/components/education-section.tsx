import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      grade: "CGPA: 7.31",
      period: "Since August 2022"
    },
    {
      degree: "Intermediate (12th)",
      field: "",
      institution: "Army Public School, CBSE, Agra",
      grade: "Percentage: 71%",
      period: "2021-2022"
    },
    {
      degree: "Matriculation (10th)",
      field: "",
      institution: "Army Public School, CBSE, Agra",
      grade: "Percentage: 83%",
      period: "2019-2020"
    }
  ];

  const certifications = [
    {
      title: "Complete Interview Preparation - Java",
      issuer: "GeeksforGeeks",
      period: "Dec 2024"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Coursera",
      period: "Sep 2024 - Nov 2024"
    },
    {
      title: "Communication Strategies for Virtual Age",
      issuer: "Coursera",
      period: "May 2023 - Jul 2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-education-title">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground" data-testid="text-education-subtitle">Academic background and professional development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-secondary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border" data-testid={`card-education-${index}`}>
                  <h4 className="text-lg font-semibold" data-testid={`text-education-degree-${index}`}>{edu.degree}</h4>
                  {edu.field && <p className="text-secondary font-medium" data-testid={`text-education-field-${index}`}>{edu.field}</p>}
                  <p className="text-muted-foreground" data-testid={`text-education-institution-${index}`}>{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid={`text-education-details-${index}`}>
                    {edu.grade} • {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-secondary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border border-border" data-testid={`card-certification-${index}`}>
                  <h4 className="font-semibold" data-testid={`text-certification-title-${index}`}>{cert.title}</h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-certification-details-${index}`}>
                    {cert.issuer} • {cert.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
