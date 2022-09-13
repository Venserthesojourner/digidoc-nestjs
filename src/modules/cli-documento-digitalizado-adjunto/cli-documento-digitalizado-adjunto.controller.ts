import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Inject,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ApiConsumes } from '@nestjs/swagger';
import { Express } from 'express';
import { nameFolderDate } from 'src/utils/date.util';
import { diskStorage } from 'multer';
import fileConfig from 'src/config/file.config';
import { FastifyFileInterceptor } from 'src/interceptor/file/file.interceptor';
import { editFileName } from 'src/utils/file/file.upload';

import { CliDocumentoDigitalizadoAdjuntoService } from './cli-documento-digitalizado-adjunto.service';
import { CreateCliDocumentoDigitalizadoAdjuntoDto } from './dto/create-cli-documento-digitalizado-adjunto.dto';
import { UpdateCliDocumentoDigitalizadoAdjuntoDto } from './dto/update-cli-documento-digitalizado-adjunto.dto';

@Controller('cli-documento-digitalizado-adjunto')
export class CliDocumentoDigitalizadoAdjuntoController {
  destination = './tmp';
  constructor(
    @Inject(fileConfig.KEY)
    private fConfig: ConfigType<typeof fileConfig>,
    private readonly cliDocumentoDigitalizadoAdjuntoService: CliDocumentoDigitalizadoAdjuntoService,
  ) {
    this.destination = this?.fConfig?.dirUploadTemp;
  }

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FastifyFileInterceptor('file', {
      storage: diskStorage({
        destination: `${process.cwd()}/tmp`,
        filename: editFileName,
      }),
    }),
  )
  @Post()
  async create(
    @Body()
    createCliDocDigiAdjuntoDto: CreateCliDocumentoDigitalizadoAdjuntoDto,
    @Param(':id', ParseIntPipe) cliDocumentoDigitalizadoId: number,
    @UploadedFile() file: Express.Multer.File,
    @Query('idpaciente', ParseIntPipe) idPaciente?: number,
    @Query('idepisodio', ParseIntPipe) idEpisodio?: number,
  ) {
    const payload: CreateCliDocumentoDigitalizadoAdjuntoDto = {
      cliDocumentoDigitalizado:
        createCliDocDigiAdjuntoDto.cliDocumentoDigitalizado,
      filename: file.path,
      contentType: file.mimetype,
      bytes: file.size,
    };

    const nameFolder = nameFolderDate();
    const dirUpload = `${this.fConfig.dirUpload}/${nameFolder}`;

    const response = await this.cliDocumentoDigitalizadoAdjuntoService.create(
      payload,
      idPaciente,
      idEpisodio,
    );

    const name = `${createCliDocDigiAdjuntoDto.cliDocumentoDigitalizado}-${response.id}`;

    const responseFile =
      await this.cliDocumentoDigitalizadoAdjuntoService.saveFile(
        file,
        dirUpload,
        name,
      );

    const update: UpdateCliDocumentoDigitalizadoAdjuntoDto = {
      filename: responseFile?.filename,
      filenameThumbnail: responseFile?.filenameThumbnail,
      alto: responseFile?.alto,
      ancho: responseFile?.ancho,
      sha1: responseFile?.sha1,
      duracion: responseFile?.duracion,
    };

    const responseUpdate =
      await this.cliDocumentoDigitalizadoAdjuntoService.update(
        response.id,
        update,
      );

    return responseUpdate;
  }

  @Get()
  findAll() {
    return this.cliDocumentoDigitalizadoAdjuntoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliDocumentoDigitalizadoAdjuntoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateCliDocumentoDigitalizadoAdjuntoDto: UpdateCliDocumentoDigitalizadoAdjuntoDto,
  ) {
    return this.cliDocumentoDigitalizadoAdjuntoService.update(
      +id,
      updateCliDocumentoDigitalizadoAdjuntoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliDocumentoDigitalizadoAdjuntoService.remove(+id);
  }

  @Get('/migration')
  migration(): void {
    this.cliDocumentoDigitalizadoAdjuntoService.saveToFhir();
  }
}
