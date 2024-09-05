// This class is useful in an API context to provide detailed and consistent error handling, allowing you to capture not only the message but also the HTTP status code, detailed errors, and stack trace.
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "" // Fixed typo
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.errors = errors 

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}