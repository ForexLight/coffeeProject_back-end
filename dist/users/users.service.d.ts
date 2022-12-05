import { User } from "./users.model";
import { UserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(userDto: UserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
