import { IsString, IsBoolean, IsOptional, IsNumber, IsNotEmpty } from "class-validator";
import { Url } from "url";


export class UpdateProductDto{

@IsString()

@IsNotEmpty()

nombre: string;


@IsString()

@IsNotEmpty()

descripcion?: string;


@IsNumber()

@IsNotEmpty()

precio?: number;

@IsString()

@IsOptional()

imageUrl: string;

}