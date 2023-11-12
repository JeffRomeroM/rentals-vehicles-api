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
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesServices: VehiclesService) {}

  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return await this.vehiclesServices.create(createVehicleDto);
  }


  @Get()
  findAll() {
    return this.vehiclesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createVehicleDto: CreateVehicleDto,
  ) {
    return this.vehiclesServices.update(id, createVehicleDto);
  }
}
