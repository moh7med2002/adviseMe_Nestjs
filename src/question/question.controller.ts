import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';


@Controller('user')
export class QuestionController {
    constructor(
        private questionService: QuestionService
    ) {}
}
