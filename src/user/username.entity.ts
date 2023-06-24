import { Table, Column, Model , DataType , ForeignKey , BelongsTo} from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class UserName extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    @Column({
        allowNull:false,
        defaultValue:"",
        type:DataType.STRING
    })
    first : string

    @Column({
        allowNull:false,
        defaultValue:"",
        type:DataType.STRING
    })
    last : string

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
