import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Body()
    orderData: {
      totalPrice: number;
      items: { productId: number; quantity: number }[];
    },
  ) {
    return this.ordersService.create(orderData);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.findOne(Number(id));
  }

  @Put(':id')
  updateOrderStatus(@Param('id') id: string, @Body() updateData: any) {
    return this.ordersService.updateStatus(Number(id), updateData.status);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.remove(Number(id));
  }
}
