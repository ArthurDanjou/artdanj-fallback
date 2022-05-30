FROM node:16-alpine3.11

RUN mkdir -p /usr/src/fallback

WORKDIR /usr/src/fallback

COPY . /usr/src/fallback

RUN yarn install

RUN yarn build

EXPOSE 3355

CMD ["yarn", "preview"]
