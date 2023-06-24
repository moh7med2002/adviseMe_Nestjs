import { Module } from '@nestjs/common';
import {  AnswerRepositry, QuestionSaveRepositry } from 'src/constant/entityRepositrye';
import { Answer } from './answer.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: AnswerRepositry,
      useValue: Answer,
    },
  ],
  exports:[AnswerRepositry]
})
export class AnswerModule {}
