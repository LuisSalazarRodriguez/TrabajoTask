const {Router} = require('express');
const router = Router();

const { getAll, create, update, delTask } = require('../controllers/task.controller');

router.get('/',getAll);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',delTask);

module.exports = router;