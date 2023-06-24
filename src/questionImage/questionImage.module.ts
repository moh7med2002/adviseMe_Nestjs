import { Module } from '@nestjs/common';
import { QuestionImageRepositry } from 'src/constant/entityRepositrye';
import { QuestionImage } from './questionImage.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: QuestionImageRepositry,
      useValue: QuestionImage,
    },
  ],
  exports:[QuestionImageRepositry]
})
export class QuestionImageModule {}
