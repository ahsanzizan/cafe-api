import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  createCategory(@Body() categoryData: CreateCategoryDto) {
    return this.categoriesService.create(categoryData);
  }

  @Get()
  getAllCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoriesService.findOne(Number(id));
  }

  @Put(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() updateData: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(Number(id), updateData);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.remove(Number(id));
  }
}
