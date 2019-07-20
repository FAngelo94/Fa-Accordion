![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# fa-accordion

Very light and customizable accordion that work without JS but only CSS.

## Using this component

### Node Modules with React
- Run `npm install fa-accordion`
- Add in index.js `import { defineCustomElements } from 'fa-accordion/loader';` and `defineCustomElements(window);` like in this example:
```sh
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import * as serviceWorker from './serviceWorker';

  import { defineCustomElements } from 'fa-accordion/loader';
  ReactDOM.render(<App />, document.getElementById('root'));

  defineCustomElements(window);

  serviceWorker.unregister();
```
- Import the component using `import 'fa-accordion'` when you want to use it like in this example:
```sh
  import React from 'react';
  import './App.css';

  import 'fa-accordion'

  function App() {
    return (
      <div>
        <fa-accordion text="titolo 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus nibh vitae interdum feugiat. Aenean at mattis sem, ac interdum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ipsum lacus, feugiat ut sagittis sed, lobortis eget magna. Suspendisse at sapien lacus. Proin et porttitor metus. Nulla auctor consectetur justo ut tempor. Etiam quis faucibus dolor. Sed rutrum ullamcorper risus, ac auctor nulla lobortis et. Aliquam quis libero ac dolor interdum bibendum sit amet vel tellus. Praesent non nunc ac quam facilisis maximus ut in quam. Aliquam nec molestie urna, sed congue erat.
        </fa-accordion>
        <fa-accordion text="titolo 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus nibh vitae interdum feugiat. Aenean at mattis sem, ac interdum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ipsum lacus, feugiat ut sagittis sed, lobortis eget magna. Suspendisse at sapien lacus. Proin et porttitor metus. Nulla auctor consectetur justo ut tempor. Etiam quis faucibus dolor. Sed rutrum ullamcorper risus, ac auctor nulla lobortis et. Aliquam quis libero ac dolor interdum bibendum sit amet vel tellus. Praesent non nunc ac quam facilisis maximus ut in quam. Aliquam nec molestie urna, sed congue erat.
        </fa-accordion>
      </div>
    );
  }

  export default App;
```

### In a stencil-starter app
- Run `npm install fa-accordion --save`
- Add an import to the npm packages `import fa-accordion;`
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install fa-accordion`
- Put a script tag similar to this `<script src='node_modules/fa-accordion/dist/fa-accordion.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc