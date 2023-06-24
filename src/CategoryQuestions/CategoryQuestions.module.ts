import { Module } from '@nestjs/common';
import {  CategoryQuestionsReposirtry } from 'src/constant/entityRepositrye';
import { CategoryQuestion } from './CategoryQuestions.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: CategoryQuestionsReposirtry,
      useValue: CategoryQuestion,
    },
  ],
  exports:[CategoryQuestionsReposirtry]
})
export class CategoryQuestionsModule {}
