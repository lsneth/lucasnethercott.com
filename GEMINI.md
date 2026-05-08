# lucasnethercott.com

This is the personal design and development portfolio for Lucas Nethercott, built with a modern web stack focusing on performance, responsiveness, and clean aesthetics.

## Project Overview

- **Purpose:** Showcase software development projects and professional experience.
- **Tech Stack:**
  - **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
  - **Library:** [React 18](https://reactjs.org/)
  - **Language:** [TypeScript](https://www.typescriptlang.org/)
  - **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - **Deployment:** Vercel (inferred from Next.js usage)

## Architecture

The project follows the Next.js App Router pattern:

- `src/app/`: Contains the application routes, layouts, and global styles.
  - `page.tsx`: The main landing page.
  - `layout.tsx`: Root layout including `NavBar` and `Footer`.
  - `_components/`: Reusable React components (private to the `app` directory).
    - `ProjectSection.tsx`: Layout for individual project showcases.
    - `SkillTag.tsx`: Component for displaying technology tags.
    - `Text.tsx` & `Spacer.tsx`: Utility components for consistent typography and layout.
  - `_types/`: TypeScript type definitions.
- `public/`: Static assets such as project images and logos.

## Key Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Development Conventions

### Styling
- **Tailwind CSS:** All styling should be done via Tailwind utility classes.
- **Theme Extensions:** Custom colors are defined in `tailwind.config.ts`:
  - `black`: `#002B36` (Primary Background)
  - `white`: `#D4D4D4` (Primary Text)
  - `gray`: `#014053` (Secondary Background/Cards)
  - `accent1`: `#229C94` (Links/Highlights)
  - `accent2`: `#D23683` (Secondary Highlights)
- **Typography:** Uses the **Ubuntu** font, integrated via `next/font/google` and configured as the default sans-serif font.

### Components
- **Private Folders:** Folders starting with `_` (e.g., `_components`, `_types`) are used to organize files that are not routes, adhering to Next.js App Router conventions.
- **Surgical Edits:** When modifying pages or components, maintain the established responsive patterns (`sm:`, `max-sm:`, etc.).

### Code Quality
- **TypeScript:** Strict typing is encouraged. Check `src/app/_types/types.ts` before adding new data structures.
- **Linting & Formatting:** ESLint and Prettier are configured to maintain code consistency. Ensure `npm run lint` passes before finalizing changes.

## Roadmap & TODOs
- Improve accessibility (ARIA labels, semantic HTML).
- Add unit and component tests.
- Refine design and styling details.
