import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RetrieveRequestDto {

    @Expose()
    public id: string;

    @Expose()
    public content: string;

    @Expose()
    public status: number;

    @Expose()
    public user_id: number;
}
