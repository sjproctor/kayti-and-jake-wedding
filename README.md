# 🥂 Kayti and Jake's Wedding Website

### ✅ Onboarding to the App

This is a React app that was creating by Vite.

- To run the app in a development environment, clone the repository and run `yarn`
- To spin up a local server run the command `yarn dev`
- The application will run locally at `http://localhost:5173/`

### 🤝 Application Dependencies

All dependencies are installed with yarn.

- [React Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
- [Flowbite React](https://www.flowbite-react.com/)
- [React router dom](https://reactrouter.com/en/main)
- [React anchor link smooth scroll](https://classic.yarnpkg.com/en/package/react-anchor-link-smooth-scroll)
- [PDF Download](https://classic.yarnpkg.com/en/package/jspdf-html2canvas)

### 💄 Styling Notes

- Styling is handled with Tailwind
  - Tailwind classnames will format on save
- Fonts
  - Header font is Moontime located in `public/fonts` and configured in `index.css`
  - Can be referenced in Tailwind as `font-moontime`
  - Body font is Garamond located in `public/fonts` and configured in `index.css`
  - Can be referenced in Tailwind as `font-garamond`
- Font color: black `#121f32`
- Accent color: gold `#b2935b`

### 🫧 Linting

To check for linting errors in the entire project:

```bash
yarn eslint .
```

To check for linting errors in a single file:

```bash
yarn eslint <filename>
```

To fix most lint issues within the project:

```bash
yarn eslint . --fix
```

To fix most lint issues within a single file:

```bash
yarn eslint <filename> --fix
```

### 🚀 Deployment

- The application is deployed on Render.com and available at [this url](https://kj-party-time.com/)

### ⚙️ Testing

- The structure of this app requires Vitest, Jest, and React Testing Library
- Testing configs are a WIP

```yml
web_test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: "20"

    - name: Restore workspace cache
      uses: actions/cache@v3
      with:
        path: "**/node_modules"
        key: ${{ runner.os }}-${{ hashFiles('**/yarn.lock') }}

    - name: Install dependencies
      run: yarn

    - name: Run unit tests
      run: yarn test
```
