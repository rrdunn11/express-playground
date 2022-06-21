import './utils/dotenvFlow';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes/index';
import { errorHandler } from './utils/errorHandling';

const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');

const meter = new MeterProvider({
  exporter: new PrometheusExporter({ port: 5001 }),
  interval: 1000,
}).getMeter('prometheus');

const app = express();
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res, next) => {
  res.send('Testing');
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
