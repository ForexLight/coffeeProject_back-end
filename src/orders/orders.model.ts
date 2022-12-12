import {
    Column,
    DataType,
    Model,
    Table
} from "sequelize-typescript";

interface PostCreationAttrs {
    orderItems: string

}
@Table({tableName: 'orders'})
export class Order extends Model<Order, PostCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.JSON, allowNull: false})
    orderItems: string;
}
