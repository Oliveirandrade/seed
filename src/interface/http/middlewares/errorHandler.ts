import { Response as ExResponse, Request as ExRequest, NextFunction } from "express"
import { ValidateError } from "tsoa"
import { ErrorHandler } from "../../../infra/utils/errors"
  
export default ( err: unknown, _req: ExRequest, res: ExResponse, next: NextFunction ): ExResponse | void => {
    if (err instanceof ValidateError) {
        return res.status(400).json({
        message: "Validation Failed",
        details: err?.fields,
        })
    }

    if (err instanceof ErrorHandler) {
        return res.status(err.statusCode()).json({
            status: err.statusCode(),
            message: err.message,
        })
    }

    if (err instanceof Error) {
        return res.status(500).json({
        message: "Internal Server Error",
        })
    }

    next()
}