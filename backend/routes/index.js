import express from 'express';

var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send('To Do API');
});

export default router;
