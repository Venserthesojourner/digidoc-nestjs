import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { DiagnosticoTactoVaginalService } from './diagnostico-tacto-vaginal-service';
import { DiagnosticoTactiVaginalController } from './diagnostico-tacto-vaginal.controller';
import { diagnosticoTactoVaginal } from './entity/diagnostico-tacto-vaginal.entity';
import { DiagnosticoTactoVaginalProvider } from './providers/diagnostico-tacto-vaginal.provider';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([diagnosticoTactoVaginal]),
  ],
  providers: [
    DiagnosticoTactoVaginalService,
    ...DiagnosticoTactoVaginalProvider,
  ],
  controllers: [DiagnosticoTactiVaginalController],
})
export class DiagnosticoTactoVaginalModule {}
