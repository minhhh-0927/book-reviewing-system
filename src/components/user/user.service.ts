import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { AUTH_SERVICE, IAuthService } from "../auth";
import { USER_REPOSITORY } from "./constants";
import { IUserRepository, IUserService } from "./contracts";
import { RegisterUserDto, RetrieveUserDto, UserDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./repositories";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwt-payload.interface";
import {User} from './entities'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(authCredentialsDto);

    if (!username) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }

  // public async signUp(user: RegisterUserDto): Promise<UserDto> {
  //   if (await this.usernameIsTaken(user.username)) {
  //     throw new ConflictException('Username is already taken.');
  //   }
  //
  //   if (await this.emailIsTaken(user.email)) {
  //     throw new ConflictException('Email address is already taken.');
  //   }
  //
  //   user.password = await this.authService.hashPassword(user.password);
  //
  //   return await this.userRepository.createUser(user);
  //   }

  // private async usernameIsTaken(username: string): Promise<boolean> {
  //   const user = await this.userRepository.findUserByUsername(username);
  //
  //   return user !== undefined;
  // }
  //
  // private async emailIsTaken(email: string): Promise<boolean> {
  //   const user = await this.userRepository.findUserByEmail(email);
  //
  //   return user !== undefined;
  // }
  //
  // public async getUsers(): Promise<Array<RetrieveUserDto>> {
  //   return await this.userRepository.getUsers();
  // }
}
