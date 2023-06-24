import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { MulterModule  } from '@nestjs/platform-express';
import { CustomStorage } from './custom.storage';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { QuestionModule } from './question/question.module';
import { QuestionVoiceModule } from './questionVoice/questionVoice.module';
import { QuestionImageModule } from './questionImage/questionImage.module';



@Module({
  imports:[ 
    JwtModule.register({global:true,secret:"token"}),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: CustomStorage.storage,
      }),
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,AdminModule, 
    CategoryModule, UserModule, QuestionModule , QuestionVoiceModule, QuestionImageModule
  ],
  controllers:[AppController]
})
export class AppModule {} 