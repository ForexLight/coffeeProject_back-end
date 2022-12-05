
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {Injectable} from "@nestjs/common";
import {UserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

    async createUser(userDto: UserDto) {
        const user = await this.userRepository.create(userDto)
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }
}
