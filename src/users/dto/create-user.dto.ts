import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class UserDto {

    @ApiProperty({example: 'email.mail@mail.com', description: 'user email'})
    @IsString({message: 'should be string'})
    @IsEmail({}, {message: 'email type error'})
    readonly email: string
    @ApiProperty({example: 'password', description: 'user password'})
    @IsString({message: 'should be string'})
    @Length(8, 30, {message: 'should be more than 8 items'})
    readonly password: string
}
