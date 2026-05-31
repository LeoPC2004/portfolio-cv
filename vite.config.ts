import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Force opening Google Chrome as the browser
process.env.BROWSER = 'Opera';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'welcome-message',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          console.log('\n\x1b[36m%s\x1b[0m\n', '  BIENVENIDO CREMA 😼\n');
        });
      }
    }
  ],
  server: {
    open: true,
  }
});
