import { UserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: UserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
