
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleImage } from './vehicle-image.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4',  nullable: false })
  price_day: number;

  @Column({ type: 'varchar',  nullable: true })
  filename: string;

  @Column({ type: 'int4', nullable: true })
  model_id: number;

  @Column({ type: 'int4', nullable: true })
  capacity: number;
  

  @OneToMany(() => VehicleImage, (vehicleImage) => vehicleImage.room, {
    cascade: true,
  })
  images?: VehicleImage[];
}
