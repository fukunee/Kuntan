const ioGet = require('../runtime/ioGet');
const BoardValidation = require('../bound/BoardValidatior');
const BoardController = require('../control/BoardController');

module["exports"] = socket => {
    ioGet(socket, 'getBoard', BoardValidation.getBoard, BoardController.getBoard);
    ioGet(socket, 'doBuild', BoardValidation.doBuild, BoardController.doBuild);
};
