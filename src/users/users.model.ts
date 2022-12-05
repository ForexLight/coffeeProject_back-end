import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    email:string;
    password: string;
}
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: 1, description: 'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'email.mail@mail.com', description: 'user email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'password', description: 'user password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: false, description: 'ban indicator'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'because of smth ', description: 'ban reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}
