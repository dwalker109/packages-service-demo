const Joi = require("@hapi/joi");

const idParamSchema = Joi.object({
  id: Joi.number()
    .integer()
    .required(),
}).required();

const pkgSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
}).required();

export { idParamSchema, pkgSchema };
