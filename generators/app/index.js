'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-welcome', {
      desc: 'Skips the welcome message',
      type: Boolean
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    if (!this.options['skip-welcome']) {
      this.log(yosay(
        'Welcome to the spectacular ' + chalk.red('generator-react-hot') + ' generator!'
      ));
    }

    var prompts = [{
      name: 'authorName',
      message: 'What\'s your name?',
      default: this.user.git.name()
    }, {
      name: 'authorEmail',
      message: 'What\'s your email address?',
      default: this.user.git.email()
    }, {
      name: 'repositoryName',
      message: 'What are you going to call this module?',
      filter: input => {
        // ensure package name is npm friendly
        const words = input.toLowerCase().split(' ');
        return words.join('-');
      }
    }, {
      name: 'repositoryUrl',
      message: 'What is your project repository URL?',
      required: true
    }, {
      name: 'description',
      message: 'Describe your project'
    }, {
      name: 'port',
      message: 'What port number would you like to run the application on?',
      default: 3000,
      validate: input => {
        if (/[^0-9]{4,5}/.test(input)) {
          return 'You may only use numbers in this answer.';
        } else if (input > 65535) {
          return 'Maximum port number allowed is 65535.';
        }
        return true;
      }
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing() {
    var unmodifiedFiles = [
      '__mocks__',
      'src',
      '.babelrc',
      '.eslintrc',
      'enzymeSetup.js',
      'shim.js',
      'index.html',
      'nginx.conf',
      'Dockerfile',
      'docker-compose.yml',
      'LICENSE',
      'index.html',
      'webpack.config.prod.js'
    ];
    unmodifiedFiles.forEach(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }, this);

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        repositoryName: this.props.repositoryName,
        repositoryUrl: this.props.repositoryUrl,
        description: this.props.description,
        authorName: this.props.authorName,
        authorEmail: this.props.authorEmail
      }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        repositoryName: this.props.repositoryName,
        repositoryUrl: this.props.repositoryUrl,
        description: this.props.description,
        authorName: this.props.authorName,
        year: new Date().getFullYear()
      }
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.base.js'),
      this.destinationPath('webpack.config.base.js'),
      {
        repositoryName: this.props.repositoryName
      }
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.dev.js'),
      this.destinationPath('webpack.config.dev.js'),
      {
        port: this.props.port
      }
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
};
