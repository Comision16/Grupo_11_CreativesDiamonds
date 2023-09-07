const { check } = require('express-validator');

const validateRegistration = [
    check('firstName').notEmpty().withMessage('Nombre es obligatorio'),
    check('lastName').notEmpty().withMessage('Apellido es obligatorio'),
    check('email').isEmail().withMessage('Email no es válido'),
    check('password').notEmpty().withMessage('Contraseña es obligatoria'),
    check('confirmPassword')
        .custom((value, { req }) => value === req.body.password).withMessage('Confirmación de contraseña no coincide'),
];

module.exports = validateRegistration