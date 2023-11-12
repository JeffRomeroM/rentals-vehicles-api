import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { VehicleImage } from '../entities/vehicle-image.entity';
import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Injectable()
export class VehiclesService{
    constructor(
        @InjectRepository(Vehicle)
        private vehicleRepo: Repository<Vehicle>,

        @InjectRepository(VehicleImage)
        private readonly vehicleImageRepo: Repository<VehicleImage>,

        private readonly dataSource: DataSource,
    ){}      
      
    async create(createVehicleDto: CreateVehicleDto){
        const { images = [], ...detailsVehicle } = createVehicleDto;

        const vehicle = await this.vehicleRepo.create({
            ...detailsVehicle,
            images: images.map((image) => this.vehicleImageRepo.create({ url: image }),
            ),
        });
        await this.vehicleRepo.save(vehicle);
        return vehicle;
    }
    
    findOne(id: number){
        return this.vehicleRepo.findOne({
            where: {id},
            relations: {
                images: true,
            }
        });
        
    }
    
    findAll(){
        return   this.vehicleRepo.find({
            order: {id: 'ASC'},
            relations: {
                images: true,
            },
        });
    }
    
    async remove(id:number){
        const room =await this.findOne(id);
        await this.vehicleRepo.remove(room);
        return 'Vehículo eliminado';
    }

    async update(id: number, changes: CreateVehicleDto){
        const {images, ...updateAll } = changes;
        const vehicle = await this.vehicleRepo.preload({
            id: id,
            ...updateAll,
        });
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        if(images) {
            await queryRunner.manager.delete(VehicleImage, {room: { id }});
            
            //creamos nuevas imagenes
            vehicle.images = images.map((image) =>
            this.vehicleImageRepo.create({ url: image }),
            );
        } else {
            vehicle.images = await this.vehicleImageRepo.findBy({ room: { id }});
        }
    
        await queryRunner.manager.save(vehicle);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return vehicle;
    }
}