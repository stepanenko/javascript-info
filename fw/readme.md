# fw

A lightweight, class-based framework for Vue 2 applications that provides dependency injection, routing, and configuration management.

Source: https://github.com/derekpitt/fw

## Features

- 🎯 Class-based API for Vue 2
- 🔄 Dependency Injection system
- 🛣️ Built-in routing
- ⚙️ Configuration management
- 🚌 Event bus system
- 🌐 Network request handling

## Installation

```bash
npm install @derekpitt/fw
```

## Quick Start

```typescript
import { bootstrap, FrameworkConfig } from '@derekpitt/fw';

// Define your root component
class App {
  // Your component logic here
}

// Bootstrap your application
bootstrap(async (fw: FrameworkConfig) => {
  // Register components
  fw.registerComponents(App);
  
  // Set the starting view
  fw.startWith(App);
  
  // Load configuration if needed
  await fw.withConfig(YourConfig, 'config.json');
});
```

## Key Concepts

### Dependency Injection

Use decorators to inject dependencies:

```typescript
@inject
class MyComponent {
  constructor(private service: MyService) {}
}
```

### Component Registration

Register components using the `needs` decorator:

```typescript
@needs(ServiceA, ServiceB)
class MyComponent {
  // Component implementation
}
```

### Configuration

Load configuration from JSON files:

```typescript
await fw.withConfig(ConfigClass, 'config.json');
```

### License

ISC

### Author

Derek Pittsinger
