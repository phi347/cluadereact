import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define your repository name as a string
const repoName = 'firstreact'; // Make sure this matches your GitHub repository name exactly

// Alternatively, if you want to dynamically get it from the environment (more advanced):
// const repoName = process.env.VITE_APP_REPO_NAME || 'firstreact';
// And in your workflow, you'd add:
// env:
//   VITE_APP_REPO_NAME: ${{ github.event.repository.name }}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path. This is crucial for GitHub Pages project sites.
  base: `/${repoName}/`,
})