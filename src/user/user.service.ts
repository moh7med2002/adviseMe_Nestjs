import { Injectable , Inject} from '@nestjs/common';
import { userRepositry } from 'src/constant/entityRepositrye';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class UserService {

    constructor(
        @Inject(userRepositry)
        private userRepository: typeof User,
        private jwt : JwtService,
    ){}
}
