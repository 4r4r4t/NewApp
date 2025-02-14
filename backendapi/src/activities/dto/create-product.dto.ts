import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsNumber } from "class-validator";
import { Url } from "url";


export class createProductDto{

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
    
  