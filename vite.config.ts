import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dsci550_d3_dashboard/', 
  plugins: [react()],
});
