import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const profiling = {
  "react-dom/client": "react-dom/profiling",
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...profiling,
    },
  },
});
