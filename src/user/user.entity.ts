import { Table, Column, Model , DataType , HasMany , BelongsToMany , HasOne} from 'sequelize-typescript';
import { UserName } from './username.entity';
import { Question } from 'src/question/question.entity';
import { QuestionLike } from 'src/like/like.entity';
import { QuestionSaved } from 'src/saved/saved.entity';
import { Answer } from 'src/answers/answer.entity';

enum Gender {
    Male = 'male',
    Female = 'female',
}

@Table
export class User extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    email:string;

    @Column({
        allowNull:false,
        type:DataType.STRING,
        defaultValue:""
    })
    password : string


    @Column({
        allowNull:false,
        type:DataType.STRING,
        defaultValue:""
    })
    image : string

    @Column({
        allowNull:false,
        type:DataType.STRING,
        defaultValue:""
    })
    job : string

    @Column({
        allowNull:false,
        type:DataType.TEXT,
        defaultValue:""
    })
    description : string

    @Column({
        allowNull:false,
        type:DataType.STRING,
        defaultValue:""
    })
    country : string

    // @Column({
    //     allowNull:false,
    //     type:DataType.STRING,
    //     defaultValue:""
    // })
    // gender : string

    @Column({
        allowNull:false,
        type: DataType.ENUM(...Object.values(Gender)),
    })
    gender: Gender;
    

    @Column({
        allowNull:false,
        type:DataType.STRING,
        defaultValue:""
    })
    code : string

    @Column({
        allowNull:false,
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    isVerified : boolean

    @HasOne(() => UserName)
    name: UserName;

    @HasMany(() => Question)
    question: Question[];

    @HasMany(() => QuestionLike)
    like: QuestionLike[];

    @HasMany(() => QuestionSaved)
    savedQuestions: QuestionSaved[];

    @HasMany(() => Answer)
    answer: Answer[];
}
