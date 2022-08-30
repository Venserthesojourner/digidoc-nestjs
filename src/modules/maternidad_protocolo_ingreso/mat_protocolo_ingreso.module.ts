import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { protocolo } from '../protocolo/entity/protocolo.entity';
import { protocoloMaternidadIngreso } from './entity/mat_protocolo_ingreso.entity';
import { protocoloMaternidadIngresoController } from './mat_protocolo_ingreso.controller';
import { protocoloMaternidadIngresoService } from './mat_protocolo_ingreso.service';
import { protocoloMaternidadIngresoProvider } from './providers/provider';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([protocolo, protocoloMaternidadIngreso]),
  ],
  providers: [
    protocoloMaternidadIngresoService,
    ...protocoloMaternidadIngresoProvider,
  ],
  controllers: [protocoloMaternidadIngresoController],
})
export class protocoloMaternidadIngresoModule {}
