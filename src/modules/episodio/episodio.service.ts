import { Inject, Injectable } from '@nestjs/common';
//import e from 'express';
import { Repository } from 'typeorm';
import { paciente } from '../paciente/entity/paciente.entity';
import { CreateEpisodioDto } from './dto/create-episodio-dto';
import { UpdateEpisodioDto } from './dto/update-episodio-dto';
import { episodio } from './entity/episodio.entity';

@Injectable()
export class episodioService {
  constructor(
    @Inject('EPISODIO_REPOSITORY')
    private readonly episodioRepo: Repository<episodio>,
    @Inject('PACIENTE_REPOSITORY')
    private readonly pacienteRepo: Repository<paciente>,
  ) {
    //
  }
  async addEpisodio(
    nuevoEpisodio: CreateEpisodioDto,
    pacienteId: number,
  ): Promise<episodio> {
    nuevoEpisodio.pacienteData = await this.pacienteRepo.findOne({
      where: { id: pacienteId },
    });
    return await this.episodioRepo.save(nuevoEpisodio);
  }
  async getAllEpisodios(): Promise<episodio[]> {
    return await this.episodioRepo.find({ relations: ['pacientData'] });
  }

  async getAllEpisodiosofOnePatient(pacienteId: number): Promise<episodio[]> {
    console.log(pacienteId);
    return await this.episodioRepo.find({
      where: { pacientData: { id: pacienteId } },
      relations: ['pacientData'],
    });
  }
  async getOneEpisodio(id: number) {
    return await this.episodioRepo.findOne({
      where: { id: id },
      relations: ['pacientData'],
    });
  }
  async updateOneEpisodio(
    id: number,
    updatedEpisodio: UpdateEpisodioDto,
  ): Promise<episodio> {
    await this.episodioRepo.update({ id: id }, updatedEpisodio);
    return await this.episodioRepo.findOneBy({ id: id });
  }
  async deleteOneEpisode(id: number): Promise<void> {
    await this.episodioRepo.delete({ id });
  }

  parseToJSON4Fhir(element: episodio) {
    const parsedFhir = {
      resourceType: 'Encounter',
      identificador: [
        {
          dominio: 'https://fhir.grupocemico.com.ar/resource/Encounter/',
          id: element.id,
        },
      ],
      estado: 'in-progress', //TODO: revisar si fecha_egreso, hora_alta, tipo_alta => finished otherwise in-progress.
      clase: {
        url: 'https://www.hl7.org/fhir/v3/ActEncounterCode/vs.html',
        codigo: 'AMB',
      },

      tipos: [
        {
          codigos: [
            {
              url: 'http://sin/url',
              codigo: '309386006',
              mostrar: 'Traumatologo',
            },
          ],
        },
      ],
      //tipoServicio: element.tipoServicio,
      prioridad: {
        codigos: [
          {
            url: 'http://sin/url',
            codigo: 'A',
            mostrar: 'Traumatologo',
          },
        ],
      },
      motivosInternacion: [element.motivoInternacion],
      periodo: {
        inicio: element.fechaIngreso,
        fin: element.fechaEgreso,
      },
    };
    return parsedFhir;
  }
}
/* 
{
  "episodio": {
    "resourceType" : "Encounter",
    "identificador": [
      {
        "dominio": "https://fhir.grupocemico.com.ar/resource/Encounter/",
        "id": "12345"
      }
    ],
    "estado": "planned | arrived | triaged | in-progress | onleave | finished | cancelled",
    "clase": {
      "url": "https://www.hl7.org/fhir/v3/ActEncounterCode/vs.html",
      "codigo": "AMB"
    },
    "tipos": [
      {
        "codigos": [
          {
            "url": "http://sin/url",
            "codigo": "309386006",
            "mostrar": "Traumatologo"
          }
        ]
      }
    ],
    "tipoServicio": {
      "codigos": [
        {
          "url": "https://www.hl7.org/fhir/valueset-service-type.html",
          "codigo": "60",
          "mostrar": ""
        }
      ]
    },
    "prioridad": {
      "codigos": [
        {
          "url": "http://sin/url",
          "codigo": "A",
          "mostrar": "Traumatologo"
        }
      ]
    },
    "motivosInternacion": [{
      "codigos": [
        {
          "url": "http://snomed.info/sct",
          "codigo": "258343008",
          "mostrar": "Heart valve replacement"
        }
      ]
    }],
    "periodo": {
      "inicio": "2020-01-01T12:34:56-03:00",
      "fin": "2020-01-04T10:30:00-03:00"
    }
  }
}
*/
