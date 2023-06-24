import { Table, Column, Model , DataType , HasMany , BelongsToMany , HasOne , ForeignKey , BelongsTo} from 'sequelize-typescript';
import { CategoryQuestion } from 'src/CategoryQuestions/CategoryQuestions.entity';
import { Answer } from 'src/answers/answer.entity';
import { Category } from 'src/category/category.entity';
import { QuestionLike } from 'src/like/like.entity';
import { QuestionImage } from 'src/questionImage/questionImage.entity';
import { QuestionVoice } from 'src/questionVoice/questionVoice.entity';
import { QuestionSaved } from 'src/saved/saved.entity';
import { User } from 'src/user/user.entity';

enum Gender {
    Male = 'male',
    Female = 'female',
}

@Table
export class Question extends Model {
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
    title:string;

    @Column({
        allowNull:false,
        type:DataType.TEXT,
        defaultValue:""
    })
    description : string

    @Column({
        allowNull:false,
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    isAnomymity : boolean

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => QuestionVoice)
    voice: QuestionVoice[];

    @HasMany(() => QuestionImage)
    image: QuestionImage[];

    @HasMany(() => QuestionLike)
    like: QuestionLike[];

    @HasMany(() => QuestionSaved)
    usersSave: QuestionSaved[];

    @HasMany(() => Answer)
    answer: Answer[];

    @BelongsToMany(() => Category, ()=>CategoryQuestion)
    categories: CategoryQuestion[];
}
