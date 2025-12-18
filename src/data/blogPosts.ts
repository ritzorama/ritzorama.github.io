export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    "id": "layer5-kanvas-google-workspace-for-infra-engineers",
    "title": "Layer5 Kanvas: The Google Workspace for Infrastructure Engineers",
    "excerpt": "Discover how Layer5 Kanvas brings real-time collaboration, visual design, and unified management to cloud native infrastructure, much like Google Workspace does for office productivity.",
    "content": `
  ## Introduction
  
  Just as Google Workspace revolutionized team productivity by enabling seamless real-time collaboration on documents, sheets, and slides, Layer5 Kanvas is transforming how infrastructure engineers and DevOps teams work with cloud native systems. Kanvas provides a collaborative canvas for designing, configuring, and managing Kubernetes and multi-cloud infrastructures—turning complex YAML files and command-line operations into an intuitive, shared visual experience.
  
  Layer5 itself describes Kanvas as delivering \"a collaborative experience for engineers similar to how Google Workspace transforms the digital work environment.\"
  
  ## What is Layer5 Kanvas?
  
  Layer5 Kanvas is a web-based visual designer and collaborative platform built on the open-source Meshery project. It allows teams to create, share, and orchestrate diagrams of cloud native infrastructure using drag-and-drop components representing Kubernetes resources, service meshes, cloud services, and more.
  
  Key capabilities include:
  - Thousands of versioned, semantic components (Deployments, Services, Ingresses, etc.)
  - Real-time multi-user editing and collaboration
  - Import from existing configs (Kubernetes manifests, Helm charts, Docker Compose)
  - Configuration panels for fine-tuning components
  - Versioning, sharing, and embedding of designs
  - Integration with Meshery for deployment and operations
  
  ## Real-Time Collaboration Like Google Docs
  
  One of the strongest parallels to Google Workspace is Kanvas's real-time collaboration:
  
  - Multiple engineers can edit the same infrastructure design simultaneously
  - Changes appear instantly for all participants
  - Add comments and conduct design reviews directly on the canvas
  - Team workspaces with access controls and organizational hierarchy
  
  This eliminates the bottlenecks of emailing YAML files back and forth or merging conflicting pull requests—just like how Google Docs ended version chaos in document collaboration.
  
  ## Drag-and-Drop Design Like Building Slides or Sheets
  
  Infrastructure design in Kanvas feels familiar:
  
  - Drag components from a rich palette onto the canvas
  - Connect them to define relationships
  - Configure properties in side panels
  - Use freestyle drawing for annotations or custom diagrams
  
  It's as intuitive as arranging elements in Google Slides or organizing data in Sheets, but for Pods, Services, and cloud resources instead of text and charts.
  
  ## Unified Workspace for Teams
  
  Kanvas, powered by Layer5 Cloud, provides:
  
  - Centralized catalog of public and private designs/patterns
  - Team management and permissions
  - Version history and sharing controls
  - Embeddable interactive designs in docs or wikis
  
  Much like Google Workspace's shared drives, calendars, and apps—all infrastructure artifacts live in one collaborative environment.
  
  ## From Design to Deployment
  
  While Google Workspace focuses on content creation, Kanvas goes further by bridging design and operations:
  
  - Deploy designs directly via Meshery
  - Validate configurations
  - Manage running workloads visually
  
  This closes the loop for infrastructure engineers, making Kanvas a complete platform for the entire lifecycle.
  
  ## Conclusion
  
  In an era of increasingly complex cloud native environments, Layer5 Kanvas brings the simplicity and collaboration of Google Workspace to infrastructure teams. By replacing fragmented tools and text-heavy configs with a visual, real-time collaborative platform, Kanvas empowers engineers to design, review, and operate infrastructure more efficiently—together.
  
  If you're tired of wrestling with YAML sprawl, give Kanvas a try and experience the future of collaborative infrastructure management.
    `,
    "date": "2025-12-17",
    "readTime": "6 min read",
    "category": "Cloud Native"
  },
  {
    id: "building-scalable-react-apps",
    title: "Building Scalable React Applications",
    excerpt: "Learn the architecture patterns and best practices for building React applications that scale gracefully with your team and codebase.",
    content: `
## Introduction

Building scalable React applications requires careful consideration of architecture, state management, and code organization. In this post, we'll explore proven patterns that help teams maintain large codebases.

## Component Architecture

The key to scalable React apps is a well-thought-out component architecture. Consider these principles:

- **Single Responsibility**: Each component should do one thing well
- **Composition over Inheritance**: Build complex UIs from simple, reusable pieces
- **Consistent Naming**: Use clear, descriptive names for components and props

## State Management Strategies

As applications grow, state management becomes crucial:

1. **Local State**: Use useState for component-specific state
2. **Context API**: Share state across component trees without prop drilling
3. **External Libraries**: Consider Redux or Zustand for complex global state

## Code Organization

A scalable folder structure might look like:

\`\`\`
src/
  components/
    ui/          # Reusable UI components
    features/    # Feature-specific components
  hooks/         # Custom hooks
  utils/         # Utility functions
  pages/         # Route components
\`\`\`

## Conclusion

Scalability is about making decisions today that won't haunt you tomorrow. Start with good patterns, refactor as needed, and always prioritize developer experience.
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
  },
  {
    id: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics",
    excerpt: "Deep dive into TypeScript generics and how they can make your code more flexible, reusable, and type-safe.",
    content: `
## Why Generics Matter

Generics are one of TypeScript's most powerful features. They allow you to write flexible, reusable code while maintaining type safety.

## Basic Generic Syntax

Here's a simple generic function:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // result is string
const num = identity(42); // TypeScript infers number
\`\`\`

## Generic Constraints

Sometimes you need to constrain what types can be used:

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

## Practical Applications

Generics shine in:

- **API response typing**: Generic fetch wrappers
- **Form handling**: Type-safe form state
- **Data structures**: Typed collections and utilities

## Conclusion

Generics might seem complex at first, but they're essential for writing professional TypeScript code. Practice with small utilities and gradually apply them to larger patterns.
    `,
    date: "2024-01-10",
    readTime: "7 min read",
    category: "TypeScript",
  },
  {
    id: "modern-css-techniques",
    title: "Modern CSS Techniques for 2024",
    excerpt: "Explore the latest CSS features and techniques that are changing how we style modern web applications.",
    content: `
## The CSS Renaissance

CSS has evolved dramatically. Let's explore features that are reshaping web styling.

## Container Queries

Finally, we can style components based on their container, not just the viewport:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Nesting

Native nesting is here:

\`\`\`css
.card {
  background: white;
  
  & .title {
    font-size: 1.5rem;
  }
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
}
\`\`\`

## :has() Selector

The "parent selector" we've always wanted:

\`\`\`css
.form:has(:invalid) {
  border-color: red;
}
\`\`\`

## Conclusion

Modern CSS is more powerful than ever. These features reduce our reliance on JavaScript and preprocessors while making our stylesheets more expressive.
    `,
    date: "2024-01-05",
    readTime: "4 min read",
    category: "CSS",
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
