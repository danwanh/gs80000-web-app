# GS80000 Web App

🌐 **Live site:** [www.digitalgs80000.com](https://www.digitalgs80000.com/)

## Introduction

GS80000 Web App is the official landing page for the GS80000 brand. It is a public-facing website that introduces the company's medical products and health-related services. The site is in Japanese.

The site currently has no admin dashboard or CMS. All content is static and lives in the source code.

### Main sections

| Section | Route | Description |
| --- | --- | --- |
| Home | `/` | Landing page with hero slider and highlights |
| Company | `/company/*` | About, greetings, philosophy and company profile |
| Products | `/product/*` | Medical devices such as GS80000 and TTMAX (details, FAQ, precautions, recommendations) |
| Services | `/service/*` | Health salon and medical equipment services |
| Health info | `/info/*`, `/happiness`, `/energy` | Health-related articles and information |
| Recruit | `/recruit/*`, `/recruitform` | Recruitment info, member stories, history and an application form |
| Agency | `/dairiten` | Sales agency (代理店) inquiry form |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy` | Privacy policy |

### Forms

The Recruit, Agency and Contact forms send submissions to external form endpoints (e.g. [Formspree](https://formspree.io/)). Each endpoint is set through an environment variable, so the site needs no backend of its own.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Installation

```bash
git clone <repository-url>
cd gs80000-web-app
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CONTACT_FORM_URL=https://formspree.io/f/your-contact-form-id
NEXT_PUBLIC_RECRUIT_FORM_URL=https://formspree.io/f/your-recruit-form-id
NEXT_PUBLIC_DAIRITEN_FORM_URL=https://formspree.io/f/your-agency-form-id
```

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

> Don't want to run it locally? Visit the live site at [www.digitalgs80000.com](https://www.digitalgs80000.com/).

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [Formspree](https://formspree.io/) endpoints
- **Linting:** ESLint

## Project Structure

```
gs80000-web-app/
├── app/
│   ├── components/   # Shared UI (header, footer, sidebar, slider, site shell)
│   ├── data/         # Static content data (news, happiness)
│   ├── company/      # Company pages
│   ├── product/      # Product pages
│   ├── service/      # Service pages
│   ├── info/         # Health information articles
│   ├── recruit/      # Recruitment pages
│   ├── recruitform/  # Recruitment application form
│   ├── contact/      # Contact form
│   ├── dairiten/     # Agency inquiry form
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── public/           # Static assets (images, logos)
└── package.json
```

## Contact

For questions or support, email **[dananh890@gmail.com](mailto:dananh890@gmail.com)**.

## License

This project is intended for **MINH DAT MEDICAL AND HEALTH COMPANY**.

All rights reserved © 2025.
