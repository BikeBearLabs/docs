# Bike Bear Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Editing

You will be editing on GitHub using its builtin Markdown editor. Ensure you are familiar with at least the [basics of Markdown](https://www.markdownguide.org/basic-syntax/) before proceeding.

1. Navigate to the [`docs`](https://github.com/BikeBearLabs/docs/tree/main/docs) folder. All documents reside in there.
2. Folders that contain folders represent **categories**; folders that contain an "index.md" file are **posts**.
3. Either:
   * Open the file you want to edit & press "e" on the keyboard, or
   * Create a new file/folder by pressing "Add file" > "Create new file" on the top right of the folder.
     * You can create **subdirectories** by typing the name of the directory followed by a "/".
     * Make sure post files placed in their own subdirectory, & are named **"index.md"**. (e.g. wordpress/content/index.md)
5. Make your changes. Switch between "Code" & "Preview" tabs as needed.
6. Images can be uploaded or pasted from your clipboard.
7. Make sure the metadata is correctly set:
   * If you're editing a post:
      * Refer to other posts for the **required** front-matter (contents at the start of each file surrounded by "---").
      * Ensure you correctly set "sidebar_position". This sets where it appears on the sidebar. You should always increment this value based on the number of current sidebar items.
   * If you've created new categories:
      * Refer to other categories for their **required** "\_category\_.yaml" file.
      * Ensure the file exists on your category, & make sure you've set the correct title & descriptions.
8. After you're done, press the top-right green "Commit changes" button.
9. Give your changes a message that describe what you've done, e.g. "Added content for managing WordPress forms"
   * They should start with an uppercase letter & be followed by lowercase ones (sentence casing).
   * They should start with a noun, e.g. Add, Change, Remove, Fix
10. Select "Commit directly to the main branch" & press "Commit"
11. Your changes should now begin building in the background & be deployed to GitHub Pages.

## Local Development Setup

### Installation

```
$ npm i
```

### Development Server

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

Simply push to `main` & a workflow will deploy to GitHub Pages.
