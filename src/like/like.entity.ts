import { Table, Column, Model  , ForeignKey , BelongsTo} from 'sequelize-typescript';
import { Question } from 'src/question/question.entity';
import { User } from 'src/user/user.entity';


@Table
export class QuestionLike extends Model {
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

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
