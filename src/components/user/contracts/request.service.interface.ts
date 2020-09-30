import { RetrieveRequestDto, RegisterRequestDto, RequestDto } from '../dto';

export interface IRequestService {
    getRequest(): Promise<Array<RetrieveRequestDto> | []>
    create(Request: RegisterRequestDto): Promise<RetrieveRequestDto | []>
    findOne(id: number): Promise<RetrieveRequestDto | []>
    update(Request: RequestDto, id: number): Promise<RetrieveRequestDto | []>
    delete(id: number): Promise<boolean>
}
