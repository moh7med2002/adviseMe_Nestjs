import { Module } from '@nestjs/common';
import { QuestionRepositry } from 'src/constant/entityRepositrye';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from './question.entity';


@Module({
  imports:[],
  controllers: [QuestionController],
  providers: [
    {
      provide: QuestionRepositry,
      useValue: Question,
    },
    QuestionService
  ],
  exports:[QuestionRepositry]
})
export class QuestionModule {}
