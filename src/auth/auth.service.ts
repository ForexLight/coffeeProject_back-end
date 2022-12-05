import {
    Body,
    HttpException,
    HttpStatus,
    Injectable,
    Post, UnauthorizedException
} from '@nestjs/common';
import {UserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/users.model";


@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login (userDto: UserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }


    async registration(userDto: UserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException('user with this email already exist', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 6)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken (user: User){
        const payload = { email: user.email, id: user.id, roles: user.roles}
        return{
            token: this.jwtService.sign(payload)
        }
    }
    private async validateUser (userDto: UserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if(user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'incorrect password or email'})
    }
}
