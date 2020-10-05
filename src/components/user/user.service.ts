import {ConflictException, Inject, Injectable} from '@nestjs/common';

import {AUTH_SERVICE, IAuthService} from '../auth';
import {USER_REPOSITORY} from './constants';
import {IUserRepository, IUserService} from './contracts';
import {RegisterUserDto, RetrieveUserDto, UserDto} from './dto';
import {InjectRepository} from '@nestjs/typeorm'
import {UserRepository} from './repositories'
import {AuthCredentialsDto} from './dto/auth-credentials.dto'

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto) {
        return await this.userRepository.signUp((authCredentialsDto));
    }
}
