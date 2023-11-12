import { Brand } from 'src/brands/entities/brand.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Model {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'int4', nullable: false })
  brand_id: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  name: string;

  // //relaciones
  @ManyToOne(()=> Brand)
  @JoinColumn({
   name: 'brand_id', 
   referencedColumnName: 'id' 

  })
  brand: Brand;

 

}
