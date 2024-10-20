import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  price: number;

  @IsString()
  @IsOptional()
  photo: string;

  @IsNumber()
  @IsOptional()
  categoryId: number;
}
