import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { IRequestRepository } from '../contracts';
import { RetrieveRequestDto, RegisterRequestDto, UpdateRequestDto } from '../dto';
import { Request } from '../entities';

@Injectable()
export class RequestRepository implements IRequestRepository  {

    private requestRepository: Repository<Request>;

    constructor(@InjectRepository(Request) requestRepository: Repository<Request>) {
        this.requestRepository = requestRepository;
    }
    public async getRequests(): Promise<Array<RetrieveRequestDto>> {
        return await this.requestRepository.find();
    }

    public async create(Request: RegisterRequestDto): Promise<RetrieveRequestDto> {
        const requestRepository = this.requestRepository.create(Request);

        return await this.requestRepository.save(requestEntity);
    }

    public async findOne(id: number): Promise<RetrieveRequestDto> {
        return await this.requestRepository.findOneOrFail(id);
    }

    public async update(Request: RequestDto, id: number): Promise<any> {

        return await this.requestRepository.update(id, Request);
    }

    public async delete(id: number): Promise<boolean> {
        await this.requestRepository.delete(id);

        return true
    }
}
