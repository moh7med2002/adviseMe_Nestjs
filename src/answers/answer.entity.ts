import { Table, Column, Model  , ForeignKey , BelongsTo , DataType} from 'sequelize-typescript';
import { Question } from 'src/question/question.entity';
import { User } from 'src/user/user.entity';


@Table
export class Answer extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    @Column({
        allowNull:false,
        type:DataType.TEXT,
        defaultValue:""
    })
    content: string;
    

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
