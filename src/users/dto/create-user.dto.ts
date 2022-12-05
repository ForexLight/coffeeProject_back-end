import {ApiProperty} from "@nestjs/swagger";

export class UserDto {

    @ApiProperty({example: 'email.mail@mail.com', description: 'user email'})
    readonly email: string
    @ApiProperty({example: 'password', description: 'user password'})
    readonly password: string
}
