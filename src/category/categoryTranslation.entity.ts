import { Table, Column, Model , DataType  , ForeignKey , BelongsTo} from 'sequelize-typescript';
import { Category } from './category.entity';

@Table
export class CategoryTranslation extends Model {
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
    title : string

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    lang : string

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;
}
