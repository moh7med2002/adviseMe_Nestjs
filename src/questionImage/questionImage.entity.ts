import { Table, Column, Model  , ForeignKey , BelongsTo} from 'sequelize-typescript';
import { Question } from 'src/question/question.entity';


@Table
export class QuestionImage extends Model {
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
}
