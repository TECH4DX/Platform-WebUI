# developer-portrait

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Lints and fixes files

```shell
npm run lint
```

### ES

- Version: 6.8.6
- [ES SDK Client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/6.x/index.html)
- [ES Rest API](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/api-conventions.html)

问题：不符合版本同期性，Vue3 对旧版本的ES SDK支持不友好，TypeScript语言和JavaScript语言需要转换，要把密码写到前端，可能会暴露信息

RestAPI调用ES集群，存在跨域问题，可以用nginx包一层解决。倾向于写个后端解决。

Golang 没有 6.8.6 的 SDK
