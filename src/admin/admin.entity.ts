import { Table, Column, Model , DataType} from 'sequelize-typescript';

@Table
export class Admin extends Model {
    @Column({
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    })
    id: number;

    @Column({
        allowNull:false,
        unique: true, 
        type:DataType.STRING
    })
    email:string;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    password : string

}
