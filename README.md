# Adasa Photography Blog

React + Vite photography blog built with React Router, Bootstrap, local JSON data and CSS.

## Run locally

1. Install Node.js (LTS).
2. Extract the project folder.
3. Open a terminal inside the folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite.

## Included

- Home page
- Blog page with search
- Category filtering using a select dropdown (not tabs/navs)
- Grid and List views
- Pagination (6 articles per page)
- Blog details route `/blog/:id`
- 404 route
- Shared layout with Navbar, Footer and Outlet

## Replace sample data with the supplied JSON

The current `src/data/blogs.json` is sample content because the provided Google Drive link could not be read from this environment.

The components currently expect each blog to have these fields:

- `id`
- `title`
- `category`
- `author`
- `date`
- `readTime`
- `image`
- `excerpt`
- `content`

If your course JSON uses different property names, map its fields in the components or share the JSON file so the project can be adjusted to the exact structure.

## Notes

No API, Axios, Redux, Context API or backend is used. The app reads the local JSON file directly.
