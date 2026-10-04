# Routes

- `/` — `app/page.js`; login/register switcher inside `RootLayout`.
- `/auth/sign-in` — `app/auth/sign-in/page.js`; standalone login form inside `RootLayout`.
- `/auth/sign-up` — `app/auth/sign-up/page.js`; standalone registration form inside `RootLayout`.
- `/profile` — `app/profile/page.js`; authenticated profile actions inside `RootLayout`.
- `/sign` — `app/sign/page.js`; camera-based sign recognition inside `RootLayout`.
- `/api/auth/[...nextauth]` — NextAuth credentials handler.
- `/api/auth/users` — registration endpoint.
