import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { categoryRepositry, categoryTranslationRepositry } from 'src/constant/entityRepositrye';
import { Category } from './category.entity';
import { CategoryTranslation } from './categoryTranslation.entity';

@Module({
    imports:[],
    controllers: [CategoryController],
    providers: [
        {
            provide: categoryRepositry,
            useValue: Category,
        },
        {
            provide: categoryTranslationRepositry,
            useValue: CategoryTranslation,
        },
        CategoryService
    ],
    exports:[categoryRepositry,categoryTranslationRepositry]
})
export class CategoryModule {}
