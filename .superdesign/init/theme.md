# Theme

## Token summary

- Font: Inter for body; monospace wordmark.
- Light foreground/background: `rgb(0 0 0)` over a zinc-to-white gradient.
- Dark foreground/background: white over black.
- Primary action: Tailwind blue-500, hover blue-600.
- Secondary action: slate-500, hover slate-600.
- Radius: default Tailwind rounded/rounded-md/rounded-xl.
- Breakpoint behavior: mobile-first with `lg` at 1024px.

## Raw source: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --foreground-rgb: 0, 0, 0; --background-start-rgb: 214, 219, 220; --background-end-rgb: 255, 255, 255; }
@media (prefers-color-scheme: dark) { :root { --foreground-rgb: 255, 255, 255; --background-start-rgb: 0, 0, 0; --background-end-rgb: 0, 0, 0; } }
body { color: rgb(var(--foreground-rgb)); background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb)); }
input { color: #111827; background-color: #fff; }
```

## Raw source: `tailwind.config.js`

```js
module.exports = { content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { backgroundImage: { 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))' } } }, plugins: [] }
```
