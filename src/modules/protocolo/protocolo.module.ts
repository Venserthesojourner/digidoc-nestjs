import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { protocolo } from './entity/protocolo.entity';
import { ProtocoloController } from './protocolo.controller';
import { ProtocoloService } from './protocolo.service';
import { ProtocoloProviders } from './providers/protocolo.providers';

@Module({
  imports: [HttpModule, DatabaseModule, TypeOrmModule.forFeature([protocolo])],
  controllers: [ProtocoloController],
  providers: [...ProtocoloProviders, ProtocoloService],
})
export class ProtocoloModule {}
