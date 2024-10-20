import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './lib/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './core/products/products.module';
import { CategoriesModule } from './core/categories/categories.module';
import { OrdersModule } from './core/orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    ProductsModule,
    CategoriesModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
