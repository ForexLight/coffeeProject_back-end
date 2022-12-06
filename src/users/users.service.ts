
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
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }
}
