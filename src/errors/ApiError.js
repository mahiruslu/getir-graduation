class ApiError extends Error {
    constructor(message, statusCode){
        super(message);
        console.log(message);
        this.message =  {
            //code shows the error code's first number as Getir wanted. 0 means success, other shows error
            "code": `${statusCode}`.split('')[0],
            //msg is the short description of the error
            "msg": `${statusCode}`.startsWith('4') ? 'fail' : 'error',
            "details": message   
        }
        this.status = statusCode;
    }
}

module.exports = ApiError;