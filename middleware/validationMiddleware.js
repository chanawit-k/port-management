import mongoose from 'mongoose'
import { body, validationResult } from 'express-validator'
import { param } from 'express-validator'
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js'
import Port from '../models/PortModels.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        if (errorMessages[0].startsWith('no job')) {
          throw new NotFoundError(errorMessages)
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route')
        }
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    // checks whether a given value conforms to the ObjectId format
    const isValidId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const job = await Port.findById(value)
    if (!job) throw new NotFoundError(`no job with id : ${value}`)
    // const isAdmin = req.user.role === 'admin'
    // const isOwner = req.user.userId === job.createdBy.toString()
    // if (!isAdmin && !isOwner)
    //   throw new UnauthorizedError('not authorized to access this route')
  }),
])
