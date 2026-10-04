# Extractable Components

## Navbar
- Source: `app/components/Navbar.js`
- Category: layout
- Description: Responsive top navigation with SignBuddy wordmark and session-aware login/logout action.
- Extractable props: authentication state, action destination.
- Hardcoded: SignBuddy label, button colors, Tailwind layout classes.

## AuthForm
- Source: `app/auth/sign-in/page.js`, `app/auth/sign-up/page.js`
- Category: basic
- Description: Repeated labeled input and primary action pattern suitable for a centered authentication card.
- Extractable props: title, fields, submit label, status message.
- Hardcoded: blue primary button and standard input spacing.
