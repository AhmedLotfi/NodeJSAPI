const {
    checkSchema
} = require("express-validator/check");

exports.validatePostAction = (req, res, next) => {

    req.check('title', 'Please enter title value').notEmpty();
    req.check('title', 'Title must be between 5 and 150 characters').isLength({
        min: 5,
        max: 150
    });
    req.check('body', 'Body must be between 5 and 2000 characters').isLength({
        min: 5,
        max: 2000
    });

    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];

        return res.status(400).json({
            error: firstError
        });
    }

    // procced to next middleware...
    next();
};