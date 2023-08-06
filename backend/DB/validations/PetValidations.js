function validatePet(pet) {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid('cat', 'dog', 'other').required(),
    breed: Joi.string().optional(),
    color: Joi.string().optional(),
    age: Joi.number().integer().min(0).max(30).optional(),
    weight: Joi.number().min(0).max(100).optional(),
    height: Joi.number().min(0).max(100).optional(),
    diet: Joi.string().optional(),
    adoption_status: Joi.string().valid('available', 'adopted', 'fostered').required(),
  });
  const { error } = schema.validate(pet);
  return error;
}