/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Request, Response } from 'express';

import { findPrimes, findArrayMedian } from '@boilerplate/util';

const app = express();

app.get('/api/prime', (req: Request, res: Response) => {
  if (!req.query?.q) {
    return res.status(400).send({
      errorMessage:
        'No query params. Please make sure q is sent as query param.',
    });
  }

  try {
    const { q } = req.query as { q: string };
    const searchNumber: number = Number.parseInt(q);

    if (isNaN(searchNumber) || typeof searchNumber !== 'number') {
      throw new Error('NaN');
    }

    if (searchNumber <= 2) {
      return res
        .status(400)
        .send({ errorMessage: 'Please enter an integer greater than two.' });
    }

    const primes: number[] = findPrimes(searchNumber);
    const median: number[] = findArrayMedian(primes);

    return res.send({ data: median });
  } catch (err) {
    return res
      .status(400)
      .send({ errorMessage: 'Error parsing the query param.' });
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
