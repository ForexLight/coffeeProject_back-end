import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({
        summary: 'create users'
    })
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto:UserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({
        summary: 'get users'
    })
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }


}
