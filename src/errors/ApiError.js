class ApiError extends Error {
    constructor(message, statusCode){
        super(message);
        this.message =  {
            "code": `${statusCode}`.split('')[0],
            "msg": `${statusCode}`.startsWith('4') ? 'fail' : 'error'            
        }
        this.status = statusCode;
    }
}

module.exports = ApiError;