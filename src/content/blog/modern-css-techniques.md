---
id: modern-css-techniques
title: "Modern CSS Techniques for 2024"
excerpt: "Explore the latest CSS features and techniques that are changing how we style modern web applications."
date: "2024-01-05"
readTime: "4 min read"
category: "CSS"
---

## The CSS Renaissance

CSS has evolved dramatically. Let's explore features that are reshaping web styling.

## Container Queries

Finally, we can style components based on their container, not just the viewport:

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## CSS Nesting

Native nesting is here:

```css
.card {
  background: white;
  
  & .title {
    font-size: 1.5rem;
  }
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
}
```

## :has() Selector

The "parent selector" we've always wanted:

```css
.form:has(:invalid) {
  border-color: red;
}
```

## Conclusion

Modern CSS is more powerful than ever. These features reduce our reliance on JavaScript and preprocessors while making our stylesheets more expressive.
