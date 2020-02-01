# React boilerplate using webpack

- Uses `webpack`, `babel`, `babel-presets` for eg:
  - `css-loader` - to bundle css files
  - `style-loader` - to bundle css files
  - `postcss-loader` - to bundle css files
  - `autoprefixer` - to auto-prefix to support css vendor prefixing for all the browers
  - `babel-loader` - to transfile latest JS to run in all the browsers
  - `url-loader` - to bundle static images

- Supports both development mode and production mode

### Usage

- Clone the project
- Install all the dependencies using `npm install`
- Run the development server (using `webpack-dev-server` package)
  ```
  npm run start
  ```
- Build the production ready build under `dist` foder,
  ```
  npm run build:prod
  ```
