import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { activitie } from './schemas/activitie.schema';
import { createActivitieDto } from './dto/create.activitie.dto';
import { updateActivitieDto } from './dto/update-activitie.dto';
import { Model } from 'mongoose';


@Injectable()

export class ActivitieService {

constructor(@InjectModel(activitie.name) private activitieModel: Model<activitie>) {}


finAll() {

this.activitieModel.find();

}


async create(createActivitie: createActivitieDto){

    const newActivitie = new this.activitieModel(createActivitie);
    
    return newActivitie.save();
    
    }


async finOne(id: string) {

return this.activitieModel.findById(id);
}


async delete(id: string) {

return this.activitieModel.findByIdAndDelete(id);

}


async update(id: string, activitie: updateActivitieDto) {

    return this.activitieModel.findByIdAndUpdate(id, activitie, {new:true});
    
    }

}