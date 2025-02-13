import { Controller, Post, Get,  Delete, Put, Body, Param } from '@nestjs/common';
import { ActivitieService } from './activitie.service';
import { createActivitieDto } from '../activities/dto/create.activitie.dto';
import { updateActivitieDto } from '../activities/dto/update-activitie.dto';
@Controller('activities')
export class ActivitiesController {
    constructor( private activitiesService: ActivitieService){
    }

    @Post('/')
    create(@Body() body:createActivitieDto){
        return this.activitiesService.create(body);
    }

    @Get()
    finAll(){
        return this.activitiesService.finAll();
    }

    @Get(':id')
    finOne(@Param('id') id:string){
        return this.activitiesService.finOne(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body: updateActivitieDto){
        return this.activitiesService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.activitiesService.delete(id);
    }

}
