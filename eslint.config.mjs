
export default [
  {
    ignores: ['node_modules/**'], // Optional: specify files/directories to ignore
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Adjust the glob pattern to match your source files
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      // Load plugins if any
    },
    rules: {
      // Your rules...
    },
  },
];
