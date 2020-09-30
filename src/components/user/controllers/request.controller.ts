import { Controller, Get, Inject, Post, Body, Res, Param } from '@nestjs/common';
import {RequestService} from './Request.service'
import { RegisterRequestDto, RequestDto } from '../dto';
import { Request_SERVICE } from '../constants';
import { IRequestService } from '../contracts';
import { Response } from 'express';

@Controller('requests')
export class RequestController {
    protected RequestService :IRequestService;
    constructor (@Inject(Request_SERVICE) RequestService: IRequestService) {
        this.requestService = requestService;
    }

    @Get('/')
    async findAll(@Res() res: Response): Promise<void> {
        let requests = await this.requestService.getRequests();

        return res.render('requests/index.njk', { requests: requests });
    }

    @Get('/create')
    async create(@Res() res: Response): Promise<void> {

        return res.render('requests/create.njk');
    }

    @Post('/create')
    async store(@Body() Request: RegisterRequestDto, @Res() res: Response): Promise<void> {
        let result = await this.requestService.create(request);

        return res.redirect('/requests/');
    }

    @Get('/:id/edit')
    async findOne(@Param('id') id: number, @Res() res: Response): Promise<void> {
        let request = await this.requestService.findOne(id);

        return res.render('Requests/edit.njk', { Request: Request });
    }

    @Post('/:id/update')
    async update(@Param('id') id: number, @Body() request: RequestDto, @Res() res: Response): Promise<void> {
        let result = await this.requestService.update(request, id);

        return res.redirect('/requests/');
    }

    @Get('/:id/delete')
    async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
        let request = await this.requestService.delete(id);

        return res.redirect('/requests/');
    }
}
