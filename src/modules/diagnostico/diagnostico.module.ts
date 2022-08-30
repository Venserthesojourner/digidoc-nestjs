import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
// Diagnostico (CSOP)
import { DiagnosticoController } from './diagnostico.controller';
import { DiagnosticoService } from './diagnostico.service';
import { DiagnosticoProvider } from './providers/diagnostico.provider';

// Entities
import { diagnosticoEstudios } from '../diagnostico-estudios/entity/diagnostico-estudios.entity';
import { diagnosticoFeto } from '../diagnostico-feto/entity/diagnostico-feto.entity';
import { diagnosticoSignosVitales } from '../diagnostico-signos-vitales/entity/diagostico-signos-vitales.entity';
import { diagnosticoTactoVaginal } from '../diagnostico-tacto-vaginal/entity/diagnostico-tacto-vaginal.entity';
import { diagnostico } from './entity/diagnostico.entity';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([
      diagnostico,
      diagnosticoFeto,
      diagnosticoTactoVaginal,
      diagnosticoEstudios,
      diagnosticoSignosVitales,
    ]),
  ],
  controllers: [DiagnosticoController],
  providers: [DiagnosticoService, ...DiagnosticoProvider],
})
export class DiagnosticoModule {}
