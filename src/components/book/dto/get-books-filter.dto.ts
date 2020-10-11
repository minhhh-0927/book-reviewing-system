import {IsNotEmpty, IsOptional} from 'class-validator'

export class getBooksFilterDto {
  name: string;
  description: string;
  image: string;
  public_date: string;
  author: string;
  number_page: number;
  price: string;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
