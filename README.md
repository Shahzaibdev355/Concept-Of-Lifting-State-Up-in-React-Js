## Lifting State Up in React

**Introduction**
- In React, "Lifting State Up" is a design pattern used to manage and share state between sibling components or deeply nested components. This approach involves moving the state management to a common ancestor component, which then passes the state and updater functions down to its child components as props. This ensures that all components which need access to the state can share a single source of truth.

## Concept

**Why Lift State Up?**
- When multiple components need to share or synchronize state, lifting state up to their closest common ancestor ensures that state changes are consistently reflected across all dependent components. This pattern helps avoid issues like prop drilling (passing props through many layers of components) and ensures a single source of truth for state management.

## How It Works
**Identify the State to Lift:**
- Determine which state needs to be shared among multiple components.
- Move State to the Closest Common Ancestor: Create a state variable in the common ancestor component and manage its state there.
- Pass State and Updater Functions as Props: Provide the state and updater functions to child components that need to access or modify the state.
- Update State via Callbacks: Child components call functions passed down via props to update the state in the ancestor component.

## Overview
In my Todo app example, I have demonstrated the concept of lifting state up to manage tasks and their states across various components. The app has a main component that handles state management and two child components: TodoForm for adding new tasks and TodoList for displaying and interacting with tasks.
