import { Controller , Post , Body, UseInterceptors, UploadedFile, UseGuards ,Request,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { CustomStorage } from 'src/custom.storage';
import { AuthGuard, CustomRequest } from 'src/auth/stradegey';


@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}
    
    @Post('updateProfile')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor('file',{storage:CustomStorage.storage}))
    uploadFile(@Request() req : CustomRequest, @UploadedFile() file: Express.Multer.File) {
        return "";
    }

}
