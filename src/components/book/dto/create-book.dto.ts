import { IsNotEmpty } from "class-validator";
export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  public_date: string;

  author: string;

  number_page: number;

  price: string;
}
