const express =require('express');
const router = express.Router();
const meController = require('../app/controllers/meController');

router.get('/create/book',meController.create);
router.post('/stored/loadCreate',meController.loadCreate);
router.get('/bin/book',meController.binDelete)
router.delete('/:id/delete',meController.loadDelete);
router.delete('/:id/delete/forever',meController.loadDeleteForever);
router.get('/:id/update',meController.update);
router.put('/stored/loadUpdate',meController.loadUpdate);
router.get('/:id/restore',meController.restore);
router.get('/myBook',meController.index);

module.exports = router;

