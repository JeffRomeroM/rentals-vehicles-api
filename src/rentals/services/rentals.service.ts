import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentalDto } from '../dto/rental.dto';
import { Rental } from '../entities/rental.entity';

@Injectable()
export class RentalsService{
    constructor(
        @InjectRepository(Rental)
        private rentalRepo: Repository<Rental>,
    ){}      
      
    

  
    async create(createRentalDto:CreateRentalDto){
        const rental = this.rentalRepo.create(createRentalDto);
        await  this.rentalRepo.save(rental);
        return rental;
    }

    

    findOne(id: number){
        return this.rentalRepo.findOne({
            where: {id},
            relations: {
                user: true,
                vehicle: true,
                customer: true,
                payment_type: true,
                

            }
        });
        
    }

    
    findAll(){
        return   this.rentalRepo.find({
            order: {id: 'ASC'},
            relations: {
                user: true,
                vehicle: true,
                customer: true,
                payment_type: true
            },
        });
    }
    
    async remove(id:number){
        const rental =await this.findOne(id);
        await this.rentalRepo.remove(rental);
        return 'Reserva eliminada';
    }

    async update(id: number, changes: CreateRentalDto){
        const oldRental = await this.findOne(id);
        const updateRental = await this.rentalRepo.merge(oldRental, changes);
        return this.rentalRepo.save(updateRental);
    }
}