import { Module } from '@nestjs/common';
import { ClassProvider } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from '../auth';
import { USER_REPOSITORY, USER_SERVICE } from './constants';
import { User } from './entities';
import { UserRepository } from './repositories';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from './jwt.strategy';

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
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600,
      }
    }),
    TypeOrmModule.forFeature([UserRepository]),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    JwtStrategy
  ],
  exports: [
    // userServiceProvider,
    JwtStrategy,
    PassportModule,
  ],
})
export class UserModule {}
