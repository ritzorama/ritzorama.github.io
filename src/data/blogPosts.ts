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
