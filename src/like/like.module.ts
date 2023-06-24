import { Module } from '@nestjs/common';
import { QuestionLikeRepositry } from 'src/constant/entityRepositrye';
import { QuestionLike } from './like.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: QuestionLikeRepositry,
      useValue: QuestionLike,
    },
  ],
  exports:[QuestionLikeRepositry]
})
export class QuestionLikeModule {}
