import { marked } from 'marked';
import hljs from 'highlight.js';

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        console.error('Highlight.js error:', err);
      }
    }
    return code;
  },
  breaks: true,
  gfm: true,
});

/**
 * Renders markdown content to HTML
 * @param markdown - The markdown string to render
 * @returns The rendered HTML string
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  return marked.parse(markdown);
}

/**
 * Synchronously renders markdown content to HTML
 * @param markdown - The markdown string to render
 * @returns The rendered HTML string
 */
export function renderMarkdownSync(markdown: string): string {
  return marked.parse(markdown) as string;
}
