# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## Screenshots-
Desktop version-
![image](https://github.com/user-attachments/assets/1905408a-c2a0-4bab-94ef-3307d90dccfd)
![image](https://github.com/user-attachments/assets/538aa949-f4f4-4f32-9ff4-d346c9130187)
![image](https://github.com/user-attachments/assets/11700c3b-0cdd-4d44-8fca-6de1a1c22154)

Mobile version-
![image](https://github.com/user-attachments/assets/cbdcd31e-1337-41da-9f16-84c1dc6a8ca5)
![image](https://github.com/user-attachments/assets/bda521d7-e677-44a3-bff5-5d572e47dd44)
![image](https://github.com/user-attachments/assets/9ba6d4f4-138e-4b9c-b65a-25164195ecd4)
![image](https://github.com/user-attachments/assets/9f03094f-acde-4710-a593-8f073b54168d)




