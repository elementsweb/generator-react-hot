# generator-react-hot
[![Build Status](https://travis-ci.org/elementsweb/generator-react-hot.svg?branch=master)](https://travis-ci.org/elementsweb/generator-react-hot)

Yeoman generator to provide the scaffolding for a React app with hot reloading.

Generated app has the following features:

- Hot reloading for React
- Transpilation with Babel to support older browsers
- Linting using ESLint, extending from the `airbnb` config
- Dockerfile to spin up an nginx server with built code
- Jest and Enzyme setup for testing
- .gitignore file to prevent accidentally pushing unnecessary files
- Development and production webpack configurations, extending from a base configuration
- Injects resources into index.html file on build
- Support for SCSS and CSS for styling

## Installation
Install generator-react-hot with npm scoped package:

```
npm install yo @j154004/generator-react-hot -g
```

## Usage
You can use this generator with `yo` with ease. In the directory you wish to create your resource run the following command:

```
yo @j154004/react-hot
```

Answer the questions asked by the generator, these answers will be injected into various files that will be created in your directory.

All the dependencies required to run the application will be installed automatically.

### Options
- `--skip-welcome` - Skips welcome greeting before displaying options.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License
See [LICENSE](./LICENSE.md) for licensing information.
