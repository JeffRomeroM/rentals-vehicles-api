import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import {  PaymentsService } from '../services/payments.service';
import { CreatePaymentDto } from '../dto/payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.paymentsService.findOne(id);
  }
  
  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
    return this.paymentsService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)id: number,
    @Body()createPaymentDto :CreatePaymentDto,
        
  )
  {
    return this.paymentsService.update(id, createPaymentDto)
  }

  
}
