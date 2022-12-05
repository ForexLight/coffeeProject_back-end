import { UserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: UserDto): Promise<{
        token: string;
    }>;
    registration(userDto: UserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
