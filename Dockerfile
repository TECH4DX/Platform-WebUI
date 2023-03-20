FROM node:16.14.2 as build-stage
WORKDIR /app
COPY package.json package.json
RUN npm install -g cnpm@7.1.0 --registry=https://registry.npm.taobao.org && \
    cnpm install -g @vue/cli && \
    cnpm install
COPY . .
RUN cnpm run build

FROM nginx as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY default.conf /etc/nginx/conf.d
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

