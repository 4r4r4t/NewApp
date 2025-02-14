import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Product } from '../activities/schemas/product.schema';
import { createProductDto} from '../activities/dto/create-product.dto';
import { UpdateProductDto} from '../activities/dto/updapte-product.dto';
import { Model } from 'mongoose';




@Injectable()

export class productService {

constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}


async findAll() {
    return this.productModel.find();
  }
  


async create(createProductDto: createProductDto) {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save(); // Guardar el producto en la base de datos
  }
    
    


    async findOne(id: string) {

        return this.productModel.findById(id);
        }

    async delete(id: string) {
        return this.productModel.findByIdAndDelete(id);
        }
          
        
          

     async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });          }
          
          
          


          
          
}