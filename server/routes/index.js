const router = require('express').Router();

// noinspection JSUnresolvedFunction
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

module["exports"] = router;