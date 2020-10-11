import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { Response } from "express";
import { USER_SERVICE } from "./constants";
import { IUserService } from "./contracts";
import { RegisterUserDto, RetrieveUserDto, UserDto } from "./dto";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userServive: UserService) {}

  @Post("/signUp")
  async signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userServive.signUp(authCredentialsDto);
  }

  @Post("/signIn")
  async signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.userServive.signIn(authCredentialsDto);
  }

  // @Get()
  // public async getUsers(): Promise<Array<RetrieveUserDto>> {
  //     return await this.userServive.getUsers();
  // }

  // @Get('/index')
  // // tslint:disable-next-line:typedef no-any
  //  public async index(@Res() res: Response): Promise<any> {
  //     const data = await this.userServive.getUsers();
  //     return res.render('index.njk', {username: data[0].username});
  // }
}
