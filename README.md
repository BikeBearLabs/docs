# Bike Bear Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Editing

You can use StackEdit to create/read/update/delete content of the docs:
https://stackedit.io/app#providerId=githubWorkspace&owner=BikeBearLabs&repo=docs&branch=main&path=docs%2F

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
