import { createParamDecorator } from '@nestjs/common';
import { User } from './entities';

export const GetUser = createParamDecorator((data, req): User => {
  console.log(2121212121)
  return req.user;
})
