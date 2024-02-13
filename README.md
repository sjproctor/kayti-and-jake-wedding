# 🥂 Jake and Kayti's Wedding Website

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
- [React router hash link](https://classic.yarnpkg.com/en/package/@xzar90/react-router-hash-link)

### 💄 Styling Notes

- Styling is handled with Tailwind
  - Tailwind classnames will format on save
- There is a custom font used for headers
  - Font is called Moontime located in `public/fonts` and configured in `index.css`
  - Can be referenced in Tailwind as `font-moontime`
- Background color: cream `#f9f5f2`
- Font color: terracotta `#9a3911`

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

- The application is deployed on Render.com and available at [this url](https://jake-and-kayti.onrender.com/)

### ⚙️ Testing

- The structure of this app requires Vitest, Jest, and React Testing Library
- Testing configs are a WIP
- GitHub Actions are a WIP

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
