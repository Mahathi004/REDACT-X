// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///home/project/node_modules/vite-plugin-pwa/dist/index.js";
import electron from "file:///home/project/node_modules/vite-plugin-electron-renderer/dist/index.mjs";
import { viteStaticCopy } from "file:///home/project/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    electron(),
    react(),
    viteStaticCopy({
      targets: [
        { src: "public/*", dest: "" }
      ]
    }),
    VitePWA({
      registerType: "autoUpdate",
      // Automatically updates the service worker
      manifest: {
        name: "RedactX",
        // Replace with your app name
        short_name: "RedactX-1.0",
        // Replace with a shorter name
        description: "NLP based auto redaction tool",
        // Replace with a brief app description
        theme_color: "#ffffff",
        // Background color for the app's title bar
        background_color: "#61DBFB",
        // Background color for the app's splash screen
        display: "standalone",
        // Makes it look like a native app
        icons: [
          {
            src: "/icon1.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon1.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icon1.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
            // Maskable icon for Android devices
          }
        ]
      }
    })
  ],
  base: "./",
  build: {
    outDir: "dist-react"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCBlbGVjdHJvbiBmcm9tICd2aXRlLXBsdWdpbi1lbGVjdHJvbi1yZW5kZXJlcic7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBlbGVjdHJvbigpLFxuICAgIHJlYWN0KCksdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7IHNyYzogJ3B1YmxpYy8qJywgZGVzdDogJycgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJywgLy8gQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1JlZGFjdFgnLCAvLyBSZXBsYWNlIHdpdGggeW91ciBhcHAgbmFtZVxuICAgICAgICBzaG9ydF9uYW1lOiAnUmVkYWN0WC0xLjAnLCAvLyBSZXBsYWNlIHdpdGggYSBzaG9ydGVyIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb246ICdOTFAgYmFzZWQgYXV0byByZWRhY3Rpb24gdG9vbCcsIC8vIFJlcGxhY2Ugd2l0aCBhIGJyaWVmIGFwcCBkZXNjcmlwdGlvblxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLCAvLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYXBwJ3MgdGl0bGUgYmFyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjNjFEQkZCJywgLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGFwcCdzIHNwbGFzaCBzY3JlZW5cbiAgICAgICAgZGlzcGxheTogJ3N0YW5kYWxvbmUnLCAvLyBNYWtlcyBpdCBsb29rIGxpa2UgYSBuYXRpdmUgYXBwXG4gICAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3JjOiAnL2ljb24xLnBuZycsXG4gICAgICAgICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzcmM6ICcvaWNvbjEucG5nJyxcbiAgICAgICAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNyYzogJy9pY29uMS5wbmcnLFxuICAgICAgICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsIC8vIE1hc2thYmxlIGljb24gZm9yIEFuZHJvaWQgZGV2aWNlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBiYXNlOicuLycsXG4gICAgICAgIGJ1aWxkOntcbiAgICAgICAgICBvdXREaXI6ICdkaXN0LXJlYWN0J1xuICAgICAgICB9XG4gICAgICB9KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsc0JBQXNCO0FBRy9CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUFFLGVBQWU7QUFBQSxNQUNyQixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssWUFBWSxNQUFNLEdBQUc7QUFBQSxNQUM5QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBO0FBQUEsTUFDZCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUE7QUFBQSxRQUNOLFlBQVk7QUFBQTtBQUFBLFFBQ1osYUFBYTtBQUFBO0FBQUEsUUFDYixhQUFhO0FBQUE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBO0FBQUEsUUFDbEIsU0FBUztBQUFBO0FBQUEsUUFDSCxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQUs7QUFBQSxFQUNMLE9BQU07QUFBQSxJQUNKLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
