import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

class ItemDto {
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  totalPrice: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) // Validate each object inside the array
  @Type(() => ItemDto) // Transform each array element into ItemDto
  items: ItemDto[];
}
