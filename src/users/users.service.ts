
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {Injectable} from "@nestjs/common";
import {UserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(userDto: UserDto) {
        const user = await this.userRepository.create(userDto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }
}
