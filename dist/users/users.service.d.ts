import { User } from "./users.model";
import { UserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(userDto: UserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
