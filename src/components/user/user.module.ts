import { Module } from '@nestjs/common';
import { ClassProvider } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth';
import { USER_REPOSITORY, USER_SERVICE } from './constants';
import { User } from './entities';
import { UserRepository } from './repositories';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const userRepositoryProvider: ClassProvider = {
  provide: USER_REPOSITORY,
  useClass: UserRepository,
};

const userServiceProvider: ClassProvider = {
  provide: USER_SERVICE,
  useClass: UserService,
};

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  // exports: [userServiceProvider],
})
export class UserModule {}
