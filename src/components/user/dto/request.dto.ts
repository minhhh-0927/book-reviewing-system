import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RequestDto {

    @Expose()
    public id: string;

    @Expose()
    public content: string;

    @Expose()
    public status: number;

    @Expose()
    public user_id: number;
}
