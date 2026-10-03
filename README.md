# SignBuddy

SignBuddy is a sign-language learning and recognition web application maintained by Soham Tyagi.

## Features

- Account registration and credential-based login
- Protected user profile and camera experience
- Browser-based TensorFlow.js recognition for five common signs
- Locally hosted model assets for reliable production inference

## Local development

Use Node.js 22 and provide the following environment variables in `.env`:

```text
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

Then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

The application is deployed at [signbuddy-rythm-hacks.vercel.app](https://signbuddy-rythm-hacks.vercel.app).

Production environment variables are managed in Vercel and are not committed to this repository.
