import { ConflictException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";

import { AUTH_SERVICE, IAuthService } from "../auth";
import { USER_REPOSITORY } from "./constants";
import { IUserRepository, IUserService } from "./contracts";
import { RegisterUserDto, RetrieveUserDto, UserDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./repositories";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { JwtService } from "@nestjs/jwt";
import {JwtPayload} from './jwt-payload.interface'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return await this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken : string }> {
    const username = await this.userRepository.validateUserPassword(authCredentialsDto);

    if(!username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
