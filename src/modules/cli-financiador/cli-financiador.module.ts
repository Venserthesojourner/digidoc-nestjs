import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CliFinanciadorService } from './cli-financiador.service';
import { CliFinanciadorController } from './cli-financiador.controller';
import { CliFinanciadorProviders } from './providers/cli-financiador.providers';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [CliFinanciadorController],
  providers: [...CliFinanciadorProviders, CliFinanciadorService],
})
export class CliFinanciadorModule {}
