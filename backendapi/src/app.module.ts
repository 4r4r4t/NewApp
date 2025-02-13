import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { ActivitiesController } from './activities/activities.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://danielxp:mongodb@cluster0.ls6ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {dbName: 'dbAppis'}),

    ActivitiesModule],
controllers: [ActivitiesController],

})
export class AppModule {}
