const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function jwtSignUser(user) {
    // noinspection JSUnresolvedVariable
    return jwt.sign({user}, process.env.TOKEN_SECRET, {
        expiresIn: '5 days'
    });
}

module["exports"] = {
    async register(req, res) {
        try {
            //Hashing the password
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            const user = new User({
                name: req.body.name,
                password: hashPassword,
            });
            user.password = undefined;

            const savedUser = await user.save();
            const savedUserJson = savedUser.toJSON();
            //Respond with the user id
            res.send({
                user: savedUserJson,
                token: jwtSignUser(savedUserJson)
            });
        } catch (err) {
            res.status(400).send({error: err});
        }
    },
    async login(req, res) {
        const user = await User.findOne({email: req.body.email}).populate({
            path: 'boards',
            select: ['_id', 'title', 'users', 'lists']
        });
        if (!user) return res.status(403).send({error: "Email doesn't exist."});

        //Check correct password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass)
            return res.status(403).send({error: 'Password is wrong.'});

        user.password = undefined;
        const userJson = user.toJSON();

        //Create and assign JWT
        const token = jwtSignUser(userJson);
        res.header('auth-token', token).send({
            user: userJson,
            token
        });
    }
};
