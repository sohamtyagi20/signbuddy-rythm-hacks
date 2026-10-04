# Page Dependency Trees

## `/` Home
Entry: `app/page.js`
- `app/auth/sign-in/page.js`
- `app/auth/sign-up/page.js`
- `app/layout.js`
  - `app/components/Navbar.js`
  - `app/components/AuthProvider.js`
  - `app/globals.css`

## `/auth/sign-up`
Entry: `app/auth/sign-up/page.js`
- `app/layout.js`
  - `app/components/Navbar.js`
  - `app/components/AuthProvider.js`
  - `app/globals.css`

## `/auth/sign-in`
Entry: `app/auth/sign-in/page.js`
- `app/layout.js`
  - `app/components/Navbar.js`
  - `app/components/AuthProvider.js`
  - `app/globals.css`

## `/profile`
Entry: `app/profile/page.js`
- `app/layout.js`
  - `app/components/Navbar.js`
  - `app/components/AuthProvider.js`
  - `app/globals.css`

## `/sign`
Entry: `app/sign/page.js`
- `app/sign/utilities.js`
- `app/layout.js`
  - `app/components/Navbar.js`
  - `app/components/AuthProvider.js`
  - `app/globals.css`
