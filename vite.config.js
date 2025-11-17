import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from environment variables if running in CI,
// or set it manually for local development if needed.
const repoName = process.env.firstreact || 'firstreact'; // Replace 'your-repo-name'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${firstreact}/`, // Set the base path
  // If you are deploying to a custom domain, you might set base to '/'
  // base: '/',
})