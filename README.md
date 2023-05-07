# MetaCSR Generator

This is a tool to generate an index.html file for each route to have a better SEO.


## Installation

### NPM

```bash
npm install -D metacsr-generator
```

### Yarn

```bash
yarn add -D metacsr-generator
```

## Usage (example for vite)

Create a metacsr.json file in the root of your project with the example configuration below.

```json
{
    "project": "Minearte Web",
    "baseHtmlPath": "./dist/index.html",
    "distPath": "./dist/",
    "routes": [{
        "name": "Home",
        "path": "/",
        "description": "Home page",
        "replaceMap": [{
            "search": "{%title%}",
            "replace": "Home Page"
        }]
    },
    {
        "name": "About",
        "path": "/about",
        "description": "About page",
        "replaceMap": [{
            "search": "{%title%}",
            "replace": "About Page"
        }]
    }]
}
```
And in your html you can add the placeholders
```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/src/assets/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="{%description%}"
    />

    <title>{%title%}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

That will generate this structure
```bash
dist/
├── about
│   └── index.html
└── index.html
```

Here is an example in vite of a package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build && cp dist/index.html dist/404.html && metacsr -v --config metacsr.json",
    "preview": "vite preview"
  },
  "meta-csr-generator": {
    "routes": [
      "/",
      "/about",
      "/contact"
    ]
  }
}
```