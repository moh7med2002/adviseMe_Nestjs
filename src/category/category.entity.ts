import { Table, Column, Model , HasMany , BelongsToMany} from 'sequelize-typescript';
import { CategoryTranslation } from './categoryTranslation.entity';
import { CategoryQuestion } from 'src/CategoryQuestions/CategoryQuestions.entity';
import { Question } from 'src/question/question.entity';

@Table
export class Category extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    @HasMany(() => CategoryTranslation)
    categoryTranslations: CategoryTranslation[];

    

    @BelongsToMany(() => Question, ()=>CategoryQuestion)
    questions: CategoryQuestion[];
}
