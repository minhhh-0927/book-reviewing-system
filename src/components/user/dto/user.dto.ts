import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {

  @Expose()
  public id: string;

  @Expose()
  public username: string;

  @Expose()
  public email: string;

  public password: string;
}
