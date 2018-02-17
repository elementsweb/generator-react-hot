var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('concourse-resource:app', () => {
  before(done => {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        authorName: 'elementsweb',
        authorEmail: 'example@company.com',
        repositoryName: 'example-project',
        repositoryUrl: 'example@git',
        description: 'Hello world!'
      })
      .on('end', done);
  });

  it('the generator can be required without throwing', () => {
    require('../generators/app');
  });

  describe('generates static files', () => {
    [
      '__mocks__/fileMock.js',
      '__mocks__/styleMock.js',
      'src/__tests__/App.js',
      'src/base.scss',
      'src/App.js',
      'src/index.js',
      '.babelrc',
      '.eslintrc',
      '.gitignore',
      'enzymeSetup.js',
      'shim.js',
      'index.html',
      'LICENSE',
      'package.json',
      'nginx.conf',
      'Dockerfile',
      'docker-compose.yml',
      'README.md',
      'webpack.config.base.js',
      'webpack.config.dev.js',
      'webpack.config.prod.js',
    ].forEach(test => {
      it(`${test}`, () => {
        assert.file([test]);
      });
    });
  });

  it('populates README file', () => {
    assert.fileContent('README.md', 'example-project');
    assert.fileContent('README.md', 'Hello world!');
    assert.fileContent('README.md', '2017 elementsweb');
  });

  it('populates package.json file', () => {
    assert.jsonFileContent('package.json', {
      name: 'example-project',
      description: 'Hello world!',
      repository: {
        url: 'example@git'
      },
      author: {
        name: 'elementsweb',
        email: 'example@company.com'
      }
    });
  });
});
