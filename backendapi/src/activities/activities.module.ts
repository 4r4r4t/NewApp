import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { ActivitieService } from './activitie.service';
import { MongooseModule } from '@nestjs/mongoose';

import { activitie, activitieSchema } from './schemas/activitie.schema';


@Module({

imports: [

MongooseModule.forFeature([

{

name: activitie.name,

schema: activitieSchema

},

]),

],
  controllers: [ActivitiesController],
  providers: [ActivitieService],
  exports: [ActivitieService],
})
export class ActivitiesModule {}
