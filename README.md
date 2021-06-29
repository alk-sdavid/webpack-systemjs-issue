With Webpack v5.41.0, the Systemjs bundle exports are missing.

Steps to reproduce this issue:

```
make start
```

Open `http://localhost:8080` in your browser, the console output should be:

```
Webpack v5.40.0
Object { init: init(), __esModule: true, … }
init  Object { ... }
Webpack v5.41.0
Object { … }
TypeError: m.init is not a function
```
