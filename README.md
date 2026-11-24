# Jay Bhardwaj Portfolio

A responsive developer portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Build a production version with `npm run build`.

## Customize

- Edit personal links, email, and resume path in `src/data/portfolio.js`.
- Add or update project cards in the exported `projects` array in that same file.
- Add `Jay-Bhardwaj-Resume.pdf` to `public/assets/` to activate resume downloads.
- Replace the LinkedIn placeholder before sharing the site.

## Deployment

Run `npm run build` and deploy the generated `dist/` folder to a static host such as Netlify, Vercel, or GitHub Pages. Configure the host to serve `index.html` for client-side routes if needed.

## Contact form

The form performs browser validation and clearly states that it does not send email until an email service or backend is connected.
