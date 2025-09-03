# Overview

This is a full-stack web application built as a personal portfolio website for showcasing professional experience, projects, and skills. The application demonstrates a comprehensive portfolio with sections for about, skills, experience, projects, education, achievements, and contact information. It follows a modern, responsive design using React for the frontend and Express.js for the backend, with a focus on clean architecture and reusable components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and follows a component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, providing a consistent and accessible design system.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected for fast hot module replacement and optimized builds
- **shadcn/ui + Radix UI**: Provides accessible, customizable components with consistent styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Wouter**: Lightweight routing solution instead of React Router for smaller bundle size
- **TanStack Query**: State management for server state and caching

## Backend Architecture
The backend follows an Express.js server architecture with a modular design. The server includes middleware for logging, error handling, and serves both API routes and static assets. The application is structured to support both development and production environments with proper static file serving.

**Key Backend Decisions:**
- **Express.js**: Lightweight and flexible web framework
- **TypeScript**: Consistent language across frontend and backend
- **Modular routing**: Separate route registration for maintainability
- **Storage abstraction**: Interface-based storage pattern for easy database swapping

## Database Design
The application uses Drizzle ORM with PostgreSQL for data persistence. The schema is centralized in a shared directory to maintain consistency between frontend and backend. The current schema includes a users table with basic authentication fields.

**Key Database Decisions:**
- **PostgreSQL**: Robust relational database for complex queries and data integrity
- **Drizzle ORM**: Type-safe database operations with good TypeScript integration
- **Neon Database**: Serverless PostgreSQL provider for scalability
- **Schema validation**: Zod integration for runtime type checking

## Styling and Design System
The application implements a comprehensive design system using CSS custom properties for theming support. The design follows modern web standards with responsive layouts and accessibility considerations.

**Key Design Decisions:**
- **CSS Custom Properties**: Enable dynamic theming and consistent design tokens
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels and semantic HTML structure
- **Component Variants**: Class Variance Authority for consistent component styling

## Development Tools and Build Process
The project includes comprehensive development tooling for code quality, type checking, and build optimization. The build process supports both development and production environments with appropriate optimizations.

**Key Tooling Decisions:**
- **ESBuild**: Fast bundling for server-side code
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Path Mapping**: Simplified imports using TypeScript path aliases
- **Development Middleware**: Vite integration for seamless development experience

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with `@neondatabase/serverless` driver
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

## UI and Styling
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web fonts including Inter, Architects Daughter, and Geist Mono

## State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

## Development and Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing and optimization

## Utility Libraries
- **clsx & tailwind-merge**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight client-side routing