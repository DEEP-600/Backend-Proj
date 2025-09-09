class ApiResponse{
    constructor(statisCode,data,message="success"){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=this.statusCode<400;
    }
}