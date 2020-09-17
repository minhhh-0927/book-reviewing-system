import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RetrieveUserDto {

  @Expose()
  public id: string;

  @Expose()
  public username: string;

  @Expose()
  public email: string;
}
