import * as Joi from "@hapi/joi";

const idSchema = Joi.object({
  id: Joi.number()
    .integer()
    .required(),
}).required();

const currencySchema = Joi.object({
  currency: Joi.string().length(3),
});

const pkgSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  products: Joi.array()
    .min(1)
    .items(Joi.string()),
  price: Joi.number().strict(),
}).required();

export { idSchema, currencySchema, pkgSchema };
