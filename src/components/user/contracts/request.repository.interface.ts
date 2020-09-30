import { RetrieveRequestDto, RegisterRequestDto, UpdateRequestDto } from '../dto';
import { Repository } from 'typeorm';
import { Request } from '../entities';

export interface IRequestRepository {
    getRequests(): Promise<Array<RetrieveRequestDto> | []>;
    create(Request: RegisterRequestDto): Promise<RetrieveRequestDto | []>;
    findOne(id: number): Promise<RetrieveRequestDto | []>;
    update(Request: UpdateRequestDto, id: number): Promise<RetrieveRequestDto | []>;
    delete(id: number): Promise<boolean>;
}
