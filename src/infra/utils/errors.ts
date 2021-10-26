class ErrorHandler extends Error {
  constructor(message: string) {
    super()
    this.message = message
  }

  statusCode() {
    if (this instanceof BadRequest) return 400 
    if (this instanceof Unauthorized) return 401
    if (this instanceof NotFound) return 404
    if (this instanceof Conflict) return 409
    return 500
  }
}
   
class BadRequest extends ErrorHandler {}
class Unauthorized extends ErrorHandler {}
class NotFound extends ErrorHandler {}
class Conflict extends ErrorHandler {}
   
export {
  ErrorHandler,
  BadRequest,
  Unauthorized,
  NotFound,
  Conflict
}