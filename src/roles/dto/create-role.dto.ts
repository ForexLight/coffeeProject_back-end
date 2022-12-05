import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'role value'})
    readonly value: string
    @ApiProperty({example: 'admin role', description: 'role descriptions'})
    readonly description: string
}
