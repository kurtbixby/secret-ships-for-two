export { router };

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const router = require('express').Router();

import { router as apiRouter } from './api/index.js';
router.use('/api', apiRouter);