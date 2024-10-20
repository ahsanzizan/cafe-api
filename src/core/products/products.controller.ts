import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
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
  updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    return this.productsService.update(Number(id), updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}
