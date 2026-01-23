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
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}
