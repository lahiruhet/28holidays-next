This is a Next.js site for 28Holidays.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email Setup

The contact form posts to `POST /api/contact` and sends mail through SMTP, which works on Vercel as long as these environment variables are set:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=info@28holidays.com
```

Notes:

- `CONTACT_TO_EMAIL` defaults to `info@28holidays.com` if omitted.
- `CONTACT_FROM_EMAIL` should be an address your SMTP provider allows as the sender.
- On Vercel, add the same values under Project Settings > Environment Variables.

## Deployment

Deploy to Vercel and configure the SMTP environment variables above before testing the form in production.
