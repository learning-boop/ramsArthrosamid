import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works from a sub-folder or any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
});
