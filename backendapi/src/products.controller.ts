import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { productService } from './products.service';
import { createProductDto } from '../activities/dto/create-product.dto';
import { UpdateProductDto } from '../activities/dto/updapte-product.dto';

@Controller('product')
export class ProductsController {
    constructor( private productService: productService){
    }

    @Post('/')
    async create(@Body() createProductDto: createProductDto) {
      return this.productService.create(createProductDto); 
    }

    @Get()
   async finAll() {
   return this.productService.findAll();
  }

    @Get(':id')
    finOne(@Param('id') id:string){
        return this.productService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
        try {
            console.log(`📝 Recibida solicitud de actualización para el producto ID: ${id}`);
            const updatedProduct = await this.productService.update(id, body);
            console.log(`✅ Actualización exitosa para el producto con ID: ${id}`);
            return updatedProduct;
        } catch (error) {
            console.error(`❌ Error en la actualización del producto: ${error.message}`);
            throw error;
        }
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.productService.delete(id);
    }
    

}
