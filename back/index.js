const server = require('./src/app.js');

  server.listen({ port: process.env.PORT || 3001 }, () => {
    console.log('% listening at 3001'); // eslint-disable-line no-console
});