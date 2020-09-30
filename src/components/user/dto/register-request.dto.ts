import {IsEmail, IsNumber, IsOptional, IsString} from 'class-validator';

export class RegisterRequestDto {

    @IsString()
    public content: string;

    @IsNumber()
    public status: string;

    @IsNumber()
    public user_id: string;

    @IsString()
    public readonly firstName: string;

    @IsString()
    public readonly lastName: string;
}
