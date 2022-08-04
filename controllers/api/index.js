export { router };

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import { getTokenForUser } from '../../auth.js';

const router = require('express').Router();
router.post('/token', async (req, res) => {
    try {
        res.status(200).json({ token: await getTokenForUser(req.body.username) });
    } catch (err) {
        res.status(400).json(err);
    }
});