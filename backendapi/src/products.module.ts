import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { productService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../activities/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductsController],
  providers: [productService],
})
export class ProductsModule {}
