import { Module } from '@nestjs/common';
import {  QuestionSaveRepositry } from 'src/constant/entityRepositrye';
import { QuestionSaved } from './saved.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: QuestionSaveRepositry,
      useValue: QuestionSaved,
    },
  ],
  exports:[QuestionSaveRepositry]
})
export class QuestionSaveModule {}
