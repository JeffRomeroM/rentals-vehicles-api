import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'int4', nullable: true })
  rental_id: number;

  @Column({ type: 'int8', nullable: false })
  amount: number;

  @Column({ type: 'varchar', nullable: false })
  payment_type: string;
}
