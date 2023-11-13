import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {  Payment } from '../entities/payment.entity';
import { CreatePaymentDto } from '../dto/payment.dto';


@Injectable()
export class PaymentsService{
    constructor(
        @InjectRepository(Payment)
        private paymentRepo: Repository<Payment>
    ){}

    async create(createPaymentDto: CreatePaymentDto){
        const payment = this.paymentRepo.create(createPaymentDto);
        await  this.paymentRepo.save(payment);
        return payment;
    }


    findOne(id: number){
        return this.paymentRepo.findOneBy({id})
    }

    
    findAll(){
        return   this.paymentRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const product =await this.findOne(id);
        await this.paymentRepo.remove(product);

        return 'Pago eliminado';
    }


    async update(id: number, changes: CreatePaymentDto){
        const oldPayment = await this.findOne(id);
        const updatePayment = await this.paymentRepo.merge(oldPayment, changes);
        return this.paymentRepo.save(updatePayment);
    }
}