/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from "path"

export default defineConfig({
  
  resolve: {
    alias:{
      "@": path.join(__dirname,"./src"),
      "@mock/*": path.join(__dirname,".test/mock"),
      "@m/*": path.join(__dirname,"./src/entities/maids"),
      "@u/*": path.join(__dirname,"./src/modules/utils")
    }
  },
  test: {
    globals:true,
    setupFiles: "./test/setup.ts"
    // ...
  }
})