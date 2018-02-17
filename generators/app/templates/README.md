# <%= repositoryName %>

<%= description %>

## Installation

Clone the repository to your local directory and install dependencies with npm:

```
git clone <%= repositoryUrl %>
cd <%= repositoryName %> && npm install
```

## Usage
`npm` commands available with this app.

|Command|Description|
|---|---|
|`start`|Run the webpack development server|
|`lint`|Run ESLint on source code and tests|
|`prebuild`|Deletes the contents of the `dist` folder|
|`build`|Build a production ready version of the project|
|`postbuild`|Copies everything required for distribution into `dist` directory|
|`test`|Run Jest tests|
|`test:watch`|Run Jest tests and watch for changes|
|`coverage`|Run Jest tests and get coverage report|

## Deployment
You can run the web application inside a Docker container serving static content with an Nginx server.

Build a production ready version of your code:
```
npm run build
```

Build the Docker image with the built code:
```
docker build -t react-application .
```

> Ensure you have a self-signed key and certificate pair in `/etc/ssl/private/nginx-selfsigned.key` and `/etc/ssl/certs/nginx-selfsigned.crt` respectively.
>
> If you don't yet have a self-signed key and certificate pair, run the following command:
> ```
> sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
> ```

Run the Docker container with Docker Compose:
```
docker-compose up
```

Navigate to https://localhost/ in your browser and see your production ready site!

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## Contributors
Contributors are listed in the projects `package.json` under the `contributors` section.

## License
Copyright 2017 <%= authorName %>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
