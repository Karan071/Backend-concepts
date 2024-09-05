//The purpose of this code is to create a higher-order function, asyncHandler, that helps handle asynchronous errors in Express.js middleware. Here's a breakdown of what this code does and how it fits into the context of handling asynchronous operations in Express applications:
// Higher-Order Function: asyncHandler

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }
}

export {asyncHandler}

//some javascript concept of Higher order functions
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}
// const asyncHandler = (fxn) => { async() => {} } //same as const asyncHandler = (func) => async() => {}
 

// wrapper is created for handling the middlwares
// const asyncHandler = (fxn) => async(req,res,next) => {
//     try {
//         await fxn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }

