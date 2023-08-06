const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
    type: 'object',
    properties: {
        email: { type: 'string'},
        password: { type: 'string' },
        password_validate: { type: 'string' },
        f_name: { type: 'string' },
        l_name: { type: 'string' },
        phone_num: { type: 'string' },
        bio: { type: 'string' },
    },
    required: ['f_name', 'password','password_validate','email','l_name'],
    additionalProperties: false
})


module.exports.LoginValidation = ajv.compile({
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string' },
    },
    required: ['password','email'],

    additionalProperties: false
})