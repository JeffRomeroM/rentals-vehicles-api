import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;


  @IsNumber()
  @IsNotEmpty()
  price_day: number;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  images?: string[];

}
