import { Injectable, Inject } from '@nestjs/common';
import { IRequestService, IRequestRepository } from '../contracts';
import { RetrieverequestDto, RegisterrequestDto, UpdaterequestDto } from '../dto';
import { Request_REPOSITORY } from '../constants';

@Injectable()
export class RequestService implements IRequestService {
    protected requestRepository: IRequestRepository;

    constructor (@Inject(Request_REPOSITORY) requestRepository: IRequestRepository) {
        this.requestRepository = requestRepository;
    }

    public async getrequests(): Promise<Array<RetrieverequestDto> | []> {
        return await this.requestRepository.getRequests();
    }

    public async create(request: RegisterRequestDto): Promise<RetrieverequestDto | []> {
        return await this.requestRepository.create(request);
    }

    public async findOne(id: number): Promise<RetrieverequestDto | []> {
        return await this.requestRepository.findOne(id);
    }

    public async update(request: RequestDto, id: number): Promise<RetrieverequestDto | []> {
        return await this.requestRepository.update(request, id);
    }

    public async delete (id: number): Promise<boolean> {
        return await this.requestRepository.delete(id)
    }
}
