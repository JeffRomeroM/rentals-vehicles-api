import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";




@Entity()
export class VehicleImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type: 'varchar',  nullable: true })
    url: string;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.images, {
        onDelete: 'CASCADE',
    })
    room: Vehicle;   
    
}