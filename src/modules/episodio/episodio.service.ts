import { Inject, Injectable } from '@nestjs/common';
//import e from 'express';
import { Repository } from 'typeorm';
import { CreateEpisodioDto } from './dto/create-episodio-dto';
import { UpdateEpisodioDto } from './dto/update-episodio-dto';
import { episodio } from './entity/episodio.entity';

@Injectable()
export class episodioService {
  constructor(
    @Inject('EPISODIO_REPOSITORY')
    private readonly episodioRepo: Repository<episodio>,
  ) {}
  async addEpisodio(nuevoEpisodio: CreateEpisodioDto): Promise<episodio> {
    return await this.episodioRepo.save(nuevoEpisodio);
  }
  async getAllEpisodios(pacienteId: number): Promise<episodio[]> {
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
  async parseToJSON4Fhir(element: episodio): Promise<JSON> {
    const parsedFhir = {
      episodio: {
        resourceType: 'Encounter',
        identificador: [
          {
            dominio: 'https://fhir.grupocemico.com.ar/resource/Encounter/',
            id: element.id,
          },
        ],
        estado: element.estado,
        clase: {
          url: 'https://www.hl7.org/fhir/v3/ActEncounterCode/vs.html',
          codigo: 'AMB',
        },
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
    return JSON.parse(JSON.stringify(parsedFhir));
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
