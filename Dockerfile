FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install @angular-devkit/build-angular

RUN npm install

CMD ["ng", "serve","--host","0.0.0.0"]