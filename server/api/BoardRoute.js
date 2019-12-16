const ioGet = require('../lib/ioGet');
const BoardValidation = require('../busiValid/BoardValidatior');
const BoardController = require('../controllers/BoardController');

module["exports"] = socket => {
    ioGet(socket, 'getBoard', BoardValidation.getBoard, BoardController.getBoard);
    ioGet(socket, 'doBuild', BoardValidation.doBuild, BoardController.doBuild);
};
