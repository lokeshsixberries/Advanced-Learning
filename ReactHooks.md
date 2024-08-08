# React Hooks

Here is a categorized list of React hooks:

## Standard Hooks

| **Hook Name**               | **Short Description**                                                    | **What It Does**                                                     |
|-----------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **`useState`**              | Declares state variables in a functional component.                      | Adds state to functional components.                                  |
| **`useEffect`**             | Runs side effects after rendering.                                        | Handles side effects like data fetching, subscriptions, etc.          |
| **`useContext`**            | Accesses the value of a React context.                                    | Provides a way to pass data through the component tree without props. |
| **`useReducer`**            | Manages state with a reducer function.                                    | An alternative to `useState` for complex state logic.                 |
| **`useCallback`**           | Memoizes a callback function.                                             | Prevents re-creation of functions on every render.                    |
| **`useMemo`**               | Memoizes a value.                                                         | Optimizes performance by memorizing expensive calculations.           |
| **`useRef`**                | Provides a mutable object that persists across renders.                   | Accesses and interacts with DOM elements or mutable values.            |
| **`useImperativeHandle`**   | Customizes the instance value that is exposed when using `ref`.            | Controls what the parent can access via a ref.                        |
| **`useLayoutEffect`**       | Similar to `useEffect`, but runs synchronously after all DOM mutations.   | Handles side effects that need to measure or modify the DOM immediately. |
| **`useDebugValue`**         | Displays a label for custom hooks in React DevTools.                       | Helps in debugging custom hooks by providing a label.                 |

## Concurrent Mode Hooks

| **Hook Name**               | **Short Description**                                                    | **What It Does**                                                     |
|-----------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **`useTransition`**         | Manages transitions and allows for concurrent rendering.                   | Helps in managing transitions and prioritizing UI updates.            |
| **`useDeferredValue`**      | Delays updates to a value until after a render.                            | Improves responsiveness by deferring updates.                         |

## Custom Hooks

| **Hook Name**               | **Short Description**                                                    | **What It Does**                                                     |
|-----------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **`useId`**                 | Generates unique IDs for accessibility attributes.                         | Ensures unique IDs for elements, useful for accessibility.            |
| **`useSyncExternalStore`**  | Subscribes to an external store and syncs its state with the component.   | Keeps state in sync with an external store.                           |
| **`usePrevious`**           | Custom hook to keep track of the previous value of a state or prop.       | Stores and provides access to previous values.                        |
| **`useUpdateEffect`**       | Similar to `useEffect`, but skips the initial render.                      | Runs the effect only after the initial render.                        |
| **`useFetch`**              | Custom hook for handling data fetching.                                   | Manages data fetching and state related to the fetch.                 |
| **`useLocalStorage`**       | Custom hook for synchronizing state with `localStorage`.                   | Manages state that is stored in `localStorage`.                        |
