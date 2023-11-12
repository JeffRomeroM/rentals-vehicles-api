import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRentalDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  observations: string;



  @IsNumber()
  @IsOptional()
  vehicle_id: number;

  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsNumber()
  @IsOptional()
  customer_id: number;


  @IsNumber()
  @IsOptional()
  pay_id: number;


  @IsDateString()
  @IsOptional()
  fecha: string;

}
