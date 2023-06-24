import { Injectable ,Inject} from '@nestjs/common';
import { Admin } from './admin.entity';
import { adminRepositry } from 'src/constant/entityRepositrye';
import { AdminAuthDto } from './dto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { ForbiddenException  } from '@nestjs/common/exceptions';


@Injectable()
export class AdminService {
    constructor(
        @Inject(adminRepositry)
        private adminRepository: typeof Admin,
        private jwt : JwtService,
    ){}

    async signup(dto : AdminAuthDto) : Promise<{msg:string}>{
        const isAdmin = await this.adminRepository.count();
        if(isAdmin > 0){
            throw new ForbiddenException('cant have two admin account');
        }
        const hashPas = await bcrypt.hash(dto.password,12);
        const newAdmin = await this.adminRepository.create({email:dto.email , password : hashPas});
        return {msg:"Admin has been created"}
    }

    async login(dto : AdminAuthDto) : Promise<{msg:string , admin:Admin , token:string}>{
        const isAdminFound = await this.adminRepository.findOne({where:{email:dto.email}});
        if(!isAdminFound){
            throw new ForbiddenException('email not found');
        }
        const isMatch = await bcrypt.compare(dto.password , isAdminFound.password);
        if(!isMatch){
            throw new ForbiddenException('invalid password');
        }
        delete isAdminFound.password;
        const payload = {id :isAdminFound.id , role:"admin"};
        const access_token = await this.jwt.signAsync(payload,{secret:"token"});
        const {password, ...others} = isAdminFound.toJSON();
        return {msg:"admin login success" , admin:others , token:access_token}
    }
}