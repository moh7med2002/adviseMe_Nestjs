import { Injectable ,Inject, NotFoundException} from '@nestjs/common';
import { Category } from './category.entity';
import { categoryRepositry, categoryTranslationRepositry } from 'src/constant/entityRepositrye';
import { CategoryTranslation } from './categoryTranslation.entity';

@Injectable()
export class CategoryService {
    constructor(
        @Inject(categoryRepositry)
        private categoryRepository: typeof Category,
        @Inject(categoryTranslationRepositry)
        private categoryTranslationRepositry: typeof CategoryTranslation,
    ){}
}
