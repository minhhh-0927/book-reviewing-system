import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";

import { IUserRepository } from "../contracts";
import { RegisterUserDto, RetrieveUserDto, UserDto } from "../dto";
import { User } from "../entities";
import { AuthCredentialsDto } from "../dto/auth-credentials.dto";
import * as bcrypt from "bcrypt";
import { use } from "nconf";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {username, email, password} = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    console.log(user);
    try {
      await this.save(user, {
        reload: false
      });
    } catch (error) {
      console.log(error)
      if (error.code === "ER_DUP_ENTRY") {
        throw new ConflictException("Username already exists");
      } else {
        console.log(error)
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const {username, email, password} = authCredentialsDto;
    console.log(authCredentialsDto)
    const user = await this.findOne({username});
    console.log(user)

    if (user && await user.validatePassword(password)) {
      return user.username;
    } else {
      return "";
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  // public async findUserByUsername(username: string): Promise<UserDto | undefined> {
  //   return await this.userRepository.findOne({username: username});
  // }

  // public async findUserByEmail(email: string): Promise<UserDto | undefined> {
  //   return await this.userRepository.findOne({email: email});
  // }

  // public async createUser(user: RegisterUserDto): Promise<UserDto> {
  //       const userEntity = this.userRepository.create(user);
  //       return await this.userRepository.save(userEntity);
  // }
  //
  // public async getUsers(): Promise<Array<RetrieveUserDto>> {
  //     return await this.userRepository.find();
  // }
}
