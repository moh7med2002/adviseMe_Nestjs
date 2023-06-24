import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userNameRepositry, userRepositry } from 'src/constant/entityRepositrye';
import { User } from './user.entity';
import { UserName } from './username.entity';


@Module({
  imports:[],
  controllers: [UserController],
  providers: [
    {
      provide: userRepositry,
      useValue: User,
    },
    {
        provide: userNameRepositry,
        useValue: UserName,
    },
    UserService
  ],
  exports:[userRepositry,userNameRepositry]
})
export class UserModule {}
