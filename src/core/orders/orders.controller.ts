import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Body()
    orderData: CreateOrderDto,
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

  // Can only update the status of an order
  @Put(':id')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() updateData: UpdateOrderDto,
  ) {
    return this.ordersService.updateStatus(Number(id), updateData.status);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.remove(Number(id));
  }
}
