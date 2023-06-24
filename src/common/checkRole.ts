import { ForbiddenException } from "@nestjs/common"

export const CheckUserRole = (userRole:string , role:string)=>{
    if(userRole!==role){
        throw new ForbiddenException('invalid user token')
    }
    else{
        return true;
    }
}