# Astro zClut Template

```sh
git clone https://github.com/zclut/astro-template.git
```

## 💻 Installation

```sh
pnpm install
# or
npm install
```


## :gear: Initial configurations

| Already configured          | Comments |
| :------------------------   | :------- |
| `tsconfig`                  | Imports from src using `@/...` instead of `src/...`
| `Tailwind`                  | -
| `i18n`                      | Languages translation in `@/i18n/locales`, ***normal translation*** or ***route translation***


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│   └── i18n/
│       ├── utils.ts
│       ├── ui.ts
│       └── locales
|           └── ...ts
└── package.json
```

- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

- Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                           |
| :------------------------   | :----------------------------------------------- |
| `pnpm add @astrojs/react`   | Installs react dependencies                      |
| `pnpm add @astrojs/vue`     | Installs vue dependencies                        |
| `pnpm add @astrojs/angular` | Installs angular dependencies                    |
| `pnpm add @astrojs/svelte`  | Installs svelte dependencies                     |

### ❔ [How to add Integrations](https://docs.astro.build/en/guides/integrations-guide/). 
