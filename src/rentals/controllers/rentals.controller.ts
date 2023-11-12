import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateRentalDto } from '../dto/rental.dto';
import { RentalsService } from '../services/rentals.service';

@Controller('rentals')
export class RentalsController {

  constructor(private readonly rentalsServices: RentalsService) {}

  @Post()
  async create(@Body() rentalDto: CreateRentalDto) {
    return await this.rentalsServices.create(rentalDto);
  }


  @Get()
  findAll() {
    return this.rentalsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rentalsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rentalsServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createRentalDto: CreateRentalDto,
  ) {
    return this.rentalsServices.update(id, createRentalDto);
  }
}
