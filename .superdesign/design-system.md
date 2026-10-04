# SignBuddy Design System

## Product
SignBuddy is an accessible web app for learning and recognizing common sign-language gestures. Authentication should feel simple, welcoming, and trustworthy before users enter the camera experience.

## Visual direction
- High-contrast, minimal, typography-first interface adapted from Swiss minimalism.
- Use only Inter and the existing monospace wordmark; do not introduce external fonts.
- Prefer an off-white canvas (`#f8fafc`) with deep ink text (`#111827`) and restrained slate supporting text (`#475569`).
- Primary interactive color: blue (`#2563eb`), hover `#1d4ed8`, focus ring `#93c5fd`.
- Cards: white, 1px slate-200 border, 16px radius, subtle shadow.
- Inputs: white, ink text, slate-300 border, 10px radius, visible blue focus ring.
- Avoid gradients, decorative illustrations, glassmorphism, and excessive motion on authentication pages.

## Layout
- A restrained top navigation with a centered max-width container.
- Authentication pages center one 420px-wide card horizontally and vertically within the remaining viewport.
- Mobile gutters: 20px. Desktop gutters: 32px. No content may touch the viewport edge.
- Card spacing: 24px internal padding on mobile, 32px on desktop.

## Typography
- Page title: 30px/36px, weight 700, tracking -0.02em.
- Body: 16px/24px, weight 400.
- Labels: 14px/20px, weight 600.
- Wordmark: 24px, bold monospace.

## Components
- Primary button: full width, 44px minimum height, blue background, white semibold text, 10px radius.
- Secondary nav button: neutral outline or subtle slate fill.
- Status messages: compact alert surface with semantic color and readable contrast.
- Links: blue with underline on hover and a visible keyboard focus outline.

## Responsive and accessibility
- Preserve a 44px minimum touch target.
- Maintain WCAG AA contrast.
- Use explicit labels, visible focus states, and reduced-motion-safe transitions.
- At widths below 640px, keep the card full width inside 20px gutters and simplify the header spacing.
