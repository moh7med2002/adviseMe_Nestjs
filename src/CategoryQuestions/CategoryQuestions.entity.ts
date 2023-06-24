import { Table, Column, Model  , ForeignKey , BelongsTo , DataType} from 'sequelize-typescript';
import { Category } from 'src/category/category.entity';
import { Question } from 'src/question/question.entity';
import { User } from 'src/user/user.entity';


@Table
export class CategoryQuestion extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    

    @ForeignKey(() => Question)
    @Column
    questionId: number;

    @BelongsTo(() => Question)
    question: Question;

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;
}
