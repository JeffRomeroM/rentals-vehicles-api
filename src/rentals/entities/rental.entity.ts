
import { Customer } from 'src/customers/entities/customer.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;
  
  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'varchar', length: 300, nullable: false })
  observations: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  duration: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  finalization: string;

  @Column({ type: 'int8', nullable: false })
  total_cost: number;

  @Column({ type: 'int4', nullable: false })
  vehicle_id: number;

  @Column({ type: 'int4', nullable: false })
  user_id: number;

  @Column({ type: 'int4', nullable: true })
  payment_id: number;

  @Column({type: 'int4', nullable: false})
  customer_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ 
    name: 'user_id',
    referencedColumnName: 'id'
   })
  user: User;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ 
    name: 'vehicle_id',
    referencedColumnName: 'id'
   })
  vehicle: Vehicle;

  @ManyToOne(() => Customer)
  @JoinColumn({ 
    name: 'customer_id',
    referencedColumnName: 'id'
   })
  customer: Customer;

  @ManyToOne(() => Payment)
  @JoinColumn({ 
    name: 'payment_id',
    referencedColumnName: 'id'
   })
  payment_type: Payment;

}
