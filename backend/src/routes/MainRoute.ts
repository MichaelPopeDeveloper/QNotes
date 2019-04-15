import * as express from 'express';
const router = express.Router();

export const MainRoute = router
    .get('/', (req, res) => {
        res.send('Home page!')
    });
