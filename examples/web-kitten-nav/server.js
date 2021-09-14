const express = require('express');
const path = require('path');
const app = express();
const {AppRegistry} = require('react-native')

const port = 3000

app.use(async (ctx) => {
  const location = new URL(ctx.url, 'https://example.org/');

  const { element, getStyleElement } = AppRegistry.getApplication('App');

  const html = ReactDOMServer.renderToString(
    ServerContainer({location, children: element})
  );

  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());

  const document = `
    <!DOCTYPE html>
    <html style="height: 100%">
    <meta charset="utf-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
    >
    ${css}
    <body style="min-height: 100%">
    <div id="root" style="display: flex; min-height: 100vh">
    ${html}
    </div>
`;

  ctx.body = document;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})