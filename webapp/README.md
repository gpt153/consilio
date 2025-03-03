# Consilio Web Application

This directory contains the web application frontend for Consilio.

## Structure

- `src/`: Source code
  - `components/`: Reusable UI components
  - `containers/`: Container components that connect to Redux
  - `redux/`: Redux store, actions, and reducers
  - `utils/`: Utility functions
  - `styles/`: Global styles and theme
- `public/`: Static assets

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build
```

## Integration with Mattermost

This webapp integrates with Mattermost in the following ways:

1. Custom plugins for enhanced functionality
2. UI customizations for improved user experience
3. Additional features specific to Consilio

## Testing

```bash
# Run tests
npm test
``` 