// @ts-ignore
const nextRoutes = require('next-routes');
const routes = require('./config/routes');

module.exports = nextRoutes()
    .add(routes.AUTH)
