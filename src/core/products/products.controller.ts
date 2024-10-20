import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() productData: Prisma.ProductCreateInput) {
    return this.productsService.create(productData);
  }

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateData: Prisma.ProductUpdateInput,
  ) {
    return this.productsService.update(Number(id), updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}
