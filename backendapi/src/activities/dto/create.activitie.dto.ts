import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";


export class createActivitieDto{

@IsString()

@IsNotEmpty()

title: string;


@IsString()

@IsOptional()

description?: string;


@IsBoolean()

@IsOptional()

status?: boolean;

}