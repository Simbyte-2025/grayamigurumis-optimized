import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Análisis de bundle (solo en modo analyze)
    process.env.ANALYZE ? visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html'
    }) : undefined,
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  
  root: path.resolve(__dirname, "client"),
  publicDir: path.resolve(__dirname, "client/public"),
  
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    
    // Optimizaciones para Cloudflare Pages
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Eliminar funciones específicas
      },
      format: {
        comments: false, // Sin comentarios
      },
    },
    
    // Code splitting optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk - React y ReactDOM
          'vendor-react': ['react', 'react-dom', 'react/jsx-runtime'],
          
          // UI components chunk
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-slot',
          ],
          
          // Routing
          'vendor-routing': ['wouter'],
          
          // Utilidades
          'vendor-utils': [
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
          ],
        },
        
        // Nombres optimizados para cache
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash].[ext]';
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash].[ext]';
          }
          
          if (/\.css$/i.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash].[ext]';
          }
          
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
    
    // Límites de chunks
    chunkSizeWarningLimit: 500, // Advertir si chunk > 500KB
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Sourcemaps solo para desarrollo
    sourcemap: false,
    
    // Reportar tamaño comprimido
    reportCompressedSize: true,
    
    // Optimización de assets
    assetsInlineLimit: 4096, // Inline assets < 4KB
  },
  
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
    ],
    exclude: [
      '@builder.io/vite-plugin-jsx-loc',
      'vite-plugin-manus-runtime',
    ],
  },
  
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  
  preview: {
    port: 3000,
    host: true,
  },
});
