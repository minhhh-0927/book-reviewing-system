import {Body, Controller, Get, Inject, Post, Res} from '@nestjs/common';

import {Response} from 'express';
import {USER_SERVICE} from '../constants';
import {IUserService} from '../contracts';
import {RegisterUserDto, RetrieveUserDto, UserDto} from '../dto';

@Controller('users')
export class UserController {

  private userServive: IUserService;

  constructor(@Inject(USER_SERVICE) userServive: IUserService) {
    this.userServive = userServive;
  }

  @Post()
  public async signUp(@Body() user: RegisterUserDto): Promise<UserDto> {
    return await this.userServive.signUp(user);
  }

  @Get()
  public async getUsers(): Promise<Array<RetrieveUserDto>> {
      return await this.userServive.getUsers();
  }

  @Get('/index')
  // tslint:disable-next-line:typedef no-any
   public async index(@Res() res: Response): Promise<any> {
      const data = await this.userServive.getUsers();
      return res.render('index.njk', {username: data[0].username});
  }
}
