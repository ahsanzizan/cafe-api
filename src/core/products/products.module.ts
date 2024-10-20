import { Module } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsService, PrismaService],
  controllers: [ProductsController],
})
export class ProductsModule {}
