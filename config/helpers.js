const ResponseObj = (isSuccessfull = false,message = "Internal Server Error",data,error) => {
    return {
        isSuccessfull,
        message,
        data,
        error
    }
}


module.exports = {ResponseObj}