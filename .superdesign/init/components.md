# Shared UI Components

The repository has no shared primitive component library. Form controls are currently authored directly inside each page.

## AuthProvider
Path: `app/components/AuthProvider.js`

```jsx
"use client"

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
};
```
