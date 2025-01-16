# Bun-Chakra-Template

- **Project** => (`Bun` + `Chakra UI` + `Xtyle Scripts`)
- **Tools** => (`React` + `TypeScript` + `Vite`)

## Commands

- **Copy**

  ```sh
  git clone https://github.com/hlop3z/bun-chakra-template.git && rm -rf bun-chakra-template/.git
  ```

- **Bun - Install**

  ```sh
  bun install
  ```

---

- **Bun - Start a Component (Element)**

  **Note:** Use "`kebab-case`"

  ```sh
  bun run start <component-name-kebab-case>
  ```

---

- **Dev**

  ```sh
  bun run dev
  ```

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
