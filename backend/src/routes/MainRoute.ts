import * as express from 'express';
const router = express.Router();

export const mainRoute = router
    .get('/', (req, res) => {
        res.send('Home page!')
    });
