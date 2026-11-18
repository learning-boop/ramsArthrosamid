import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import BookPage from './components/BookPage.jsx';

// Used only at build time by scripts/prerender.mjs, so each page's text is in the HTML
// that search engines and other crawlers receive, before any JavaScript runs.
export const pages = {
  'index.html': () => renderToString(<App />),
  'book.html': () => renderToString(<BookPage />),
};
