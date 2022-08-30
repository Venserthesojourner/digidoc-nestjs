import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './config/enviroments';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import dataBaseConfig from './config/dataBase.config';
import fileConfig from './config/file.config';
import configEndpoint from './config/endpoint.config';

//Event emitter y schedules
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { protocoloMaternidadIngresoModule } from './modules/maternidad_protocolo_ingreso/mat_protocolo_ingreso.module';
import { ProtocoloModule } from './modules/protocolo/protocolo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodioModule } from './modules/episodio/episodio.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { DiagnosticoModule } from './modules/diagnostico/diagnostico.module';
import { DiagnosticoFetoModule } from './modules/diagnostico-feto/diagnostico-feto.module';
import { DiagnosticoSignosVitalesModule } from './modules/diagnostico-signos-vitales/diagnostico-signos-vitales.module';
import { DiagnosticoTactoVaginalModule } from './modules/diagnostico-tacto-vaginal/diagnostico-tacto-vaginal.module';
import { DiagnosticoEstudiosModule } from './modules/diagnostico-estudios/diagnostico-estudios.module';
import { CliFinanciadorModule } from './modules/cli-financiador/cli-financiador.module';
import { CliFinanciadorPacienteModule } from './modules/cli-financiador-paciente/cli-financiador-paciente.module';
import { CliDocumentoDigitalizadoModule } from './modules/cli-documento-digitalizado/cli-documento-digitalizado.module';
import { CliDocumentoDigitalizadoAdjuntoModule } from './modules/cli-documento-digitalizado-adjunto/cli-documento-digitalizado-adjunto.module';
import { AntecedentesModule } from './modules/antecedentes/antecedentes.module';
import { AntecedentesPartosModule } from './modules/antecedentes-partos/antecedentes-partos.module';
import { AntecedentesMetrorragiaModule } from './modules/antecedentes-metrorragia/antecedentes-metrorragia.module';
import { AntecedentesGinecobstetricosModule } from './modules/antecedentes-ginecobstetricos/antecedentes-ginecobstetricos.module';
import { AntecedentesVacunasModule } from './modules/antecedentes-vacunas/vacunas.module';
import { AntecedentesSerologiaModule } from './modules/antecedentes-serologias/serologia.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [dataBaseConfig, fileConfig, configEndpoint],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      port: parseInt(process.env.MYSQL_PORT),
      password: process.env.MYSQL_ROOT_PASSWORD,
      username: process.env.MYSQL_USER,
      entities: [__dirname + 'dist/modules/**/entity/*.entity.js'],
      autoLoadEntities: true,
      migrations: [__dirname + 'dist/src/database/migrations/*js'],
      synchronize: false,
    }),
    DatabaseModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    AntecedentesModule,
    AntecedentesGinecobstetricosModule,
    AntecedentesMetrorragiaModule,
    AntecedentesPartosModule,
    AntecedentesSerologiaModule,
    AntecedentesVacunasModule,
    DiagnosticoModule,
    DiagnosticoFetoModule,
    DiagnosticoSignosVitalesModule,
    DiagnosticoTactoVaginalModule,
    CliFinanciadorModule,
    CliDocumentoDigitalizadoModule,
    CliDocumentoDigitalizadoAdjuntoModule,
    DiagnosticoEstudiosModule,
    EpisodioModule,
    protocoloMaternidadIngresoModule,
    PacienteModule,
    ProtocoloModule,
    CliFinanciadorPacienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
