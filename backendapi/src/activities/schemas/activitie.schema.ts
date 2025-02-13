import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema({

timestamps: true

})

export class activitie {

@Prop({

unique: true,

required: true,

trim: true // trim Retira los espacios del inicio y el

}) // final de una cadena

title: string;


@Prop({

trim: true

})

description: string;


@Prop({ default: false})

status: boolean;

}

export const activitieSchema = SchemaFactory.createForClass(activitie)