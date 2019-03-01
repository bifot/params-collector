# params-collector

Collect params in one object (params = params + query + body).

## Install

```sh
$ npm i params-collector
```

## Usage

### Express

```js
const express = require('express');
const bodyParser = require('body-parser');
const paramsCollector = require('params-collector');

const app = express();

app.use(bodyParser.json());
app.use(paramsCollector);

app.all('*', (req, res) => {
    /*

      before:

        req.params = { id: 5 };
        req.query = { sort: 'id' };
        req.body = { name: 'John' };


      after:
  
        req.params = { sort: 'id', id: 5, name: 'John' };  

     */
});

app.listen(process.env.PORT);
```

### Koa

```js
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const paramsCollector = require('params-collector');

const app = new Koa();

app.use(bodyParser());
app.use(paramsCollector);

app.use((ctx) => {
  /*

    before:

      ctx.params = { id: 5 };
      ctx.query = { sort: 'id' };
      ctx.request.body = { name: 'John' };


    after:

      ctx.params = { sort: 'id', id: 5, name: 'John' };  

   */
});

app.listen(process.env.PORT);
```
