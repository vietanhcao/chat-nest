# Admin ICX

## Installation

### Clone repo

```bash
# clone the repo

```

### Basic usage

```bash
# dev server with hot reload at http://localhost:3000
$ npm install
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## File structure

```
React news
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - ts icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.ts  #sidebar config
|   │   └── ...
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.ts
│   ├── App.test.ts
│   ├── polyfill.ts
│   ├── index.ts
│   ├── routes.ts    #routes config
│   └── store.ts     #template state example
│
└── package.json
```
