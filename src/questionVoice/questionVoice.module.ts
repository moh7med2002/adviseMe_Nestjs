import { Module } from '@nestjs/common';
import { QuestionVoiceRepositry } from 'src/constant/entityRepositrye';
import { QuestionVoice } from './questionVoice.entity';


@Module({
  imports:[],
  controllers: [],
  providers: [
    {
      provide: QuestionVoiceRepositry,
      useValue: QuestionVoice,
    },
  ],
  exports:[QuestionVoiceRepositry]
})
export class QuestionVoiceModule {}
