import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType, ForeignKey,
    Model,
    Table
} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";

interface GoodCreationAttrs {
    id: number
    name: string
    price: number
    category:string
    img: string
}
@Table({tableName: 'goods'})
export class Goods extends Model<Goods, GoodCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    price: number;

    @Column({type: DataType.STRING, allowNull: false})
    category: string

    @Column({type: DataType.STRING})
    img: string;

}
