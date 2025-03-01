# Consilio Shared

This directory contains shared components, utilities, and types that are used across different Consilio applications (web, desktop, mobile).

## Structure

- `src/`: Source code
  - `components/`: Reusable UI components
  - `utils/`: Utility functions
  - `types/`: TypeScript type definitions
- `dist/`: Compiled output

## Usage

Import shared components and utilities in your application:

```typescript
// Import from the shared package
import { SomeComponent, someUtility } from '@consilio/shared';

// Use in your application
function MyComponent() {
  const result = someUtility();
  return <SomeComponent data={result} />;
}
```

## Development

### Building

```bash
# Build the shared package
npm run build
```

### Development Mode

```bash
# Watch for changes and rebuild
npm run dev
```

## Testing

```bash
# Run tests
npm test
``` 