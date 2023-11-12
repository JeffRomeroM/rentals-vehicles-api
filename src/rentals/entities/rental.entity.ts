
import { Customer } from 'src/customers/entities/customer.entity';
import { User } from 'src/users/entities/user.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;
  
  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'varchar', length: 300, nullable: false })
  observations: string;

  @Column({ type: 'int4', nullable: false })
  vehicle_id: number;

  @Column({ type: 'int4', nullable: false })
  user_id: number;

  @Column({ type: 'int4', nullable: true })
  pay_id: number;

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

}
