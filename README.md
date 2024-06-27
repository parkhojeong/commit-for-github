<div align="center">
<img src="public/icon-128.png" alt="logo"/>
<h1> Chrome Extension commits-for-github with<br/>React + Vite + Typescript</h1>

[//]: # ()
[//]: # ()
![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)
![GitHub action badge](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/actions/workflows/build.yml/badge.svg)
</div>

### [commits-for-github](https://chrome.google.com/webstore/detail/commits-for-github/neodnhmpddbnioldcljmkkknpmhdhpjo?hl=en)

A Browser extension that makes it easy to search commit list and add commit link into any GitHub comment box.

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Installation](#installation)
    - [Procedures](#procedures)
- [Attention](#attention)
- [Screenshots](#screenshots)
    - [Popup](#popup)
- [Documents](#documents)

## Intro <a name="intro"></a>

This boilerplate is made for creating chrome extensions using React and Typescript.
> The focus was on improving the build speed and development experience with Vite.

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `yarn` or `npm i` (check your node version >= 16)
4. Run `yarn dev` or `npm run dev`
5. Load Extension on Chrome
    1. Open - Chrome browser
    2. Access - chrome://extensions
    3. Check - Developer mode
    4. Find - Load unpacked extension
    5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `yarn build` or `npm run build`.

## Attention <a name="attention"></a>

- Html files in the public folder are automatically copied from inside the `src/pages` folder. So, if you want to edit
  the html template file, edit index.html in each page folder.

## Screenshots <a name="screenshots"></a>

### PR comment box

![Screen Shot 2022-05-06 at 12 21 43 AM](https://user-images.githubusercontent.com/34734102/166957053-dfae3066-6be8-498c-be65-37b79c8ae540.png)

### commit list

![Screen Shot 2022-05-06 at 12 22 21 AM](https://user-images.githubusercontent.com/34734102/166957276-5bf6ea1c-1e62-4211-93a3-a82b55f306ee.png)

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)



