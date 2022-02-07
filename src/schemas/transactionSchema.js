import joi from 'joi'


const transactionSchema = joi.object({
	value: joi.number().precision(2).min(0).max(999999999).required(),
	description: joi.string().min(2).max(80).required(),
}).length(2)


export {
	transactionSchema,
}
