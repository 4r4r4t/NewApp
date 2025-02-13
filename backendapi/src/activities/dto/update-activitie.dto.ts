import { IsString, IsBoolean, IsOptional } from "class-validator";


export class updateActivitieDto{

@IsString()

@IsOptional()

title: string;


@IsString()

@IsOptional()

description?: string;


@IsBoolean()

@IsOptional()

status?: boolean;

}