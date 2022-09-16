import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { paciente } from 'src/modules/paciente/entity/paciente.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PacienteService {
  constructor(
    @Inject('PACIENTE_REPOSITORY')
    private pacienteRepository: Repository<paciente>,
    private readonly httpService: HttpService,
  ) {
    //
  }

  async create(createPacienteDto: CreatePacienteDto) {
    const newObject = await this.pacienteRepository.save(createPacienteDto);
    return newObject;
  }

  async findAll(take = 100, skip = 0) {
    const result = await this.pacienteRepository.find({
      take,
      skip,
      order: { id: 'ASC' },
    });
    return result;
  }

  async findOne(id: number) {
    const result = await this.pacienteRepository.findOneBy({ id });
    return result;
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    await this.pacienteRepository.update({ id }, updatePacienteDto);
    const object = await this.pacienteRepository.findOneBy({ id });
    return object;
  }

  async remove(id: number) {
    await this.pacienteRepository.delete({ id });
    return 'Borrado Exitoso';
  }

  parseToJSON4Fhir(element: paciente) {
    const apellidos = [];
    if (element.primerApellido) {
      apellidos.push(element.primerApellido);
    }
    if (element.segundoApellido) {
      apellidos.push(element.segundoApellido);
    }

    const nombres = [];
    if (element.primerNombre) {
      nombres.push(element.primerNombre);
    }
    if (element.segundoNombre) {
      nombres.push(element.segundoNombre);
    }
    //Logger.log(element.fecha_nacimiento.toISOString());
    const parsedFhir = {
      resourceType: 'Patient',
      identificador: {
        // Segun el ID de tipo tengo una URL diferente
        dominio: 'https://cmic.grupocemico.com.ar',
        id: element.id,
      },
      documento: [
        {
          tipo: element.tipoDocumento,
          numero: element.documento,
        },
      ],
      direccion: {
        calle: element.direccion,
        codigo_postal: element.codigoPostal,
        ciudad: element.localidad,
        provincia: element.provincia,
        pais: 'Argentina',
        //element.pais,
      },
      apellidos,
      nombres,
      telefono: element.telefonoFijo,
      email: element.email,
      celular: element.telefonoMovil,
      sexo: element.sexo === 'M' ? 'male' : 'female',
      fecha_nacimiento: element.fecha_nacimiento.toISOString().split('T')[0],
      fed_nacion_id: element.fedNacion,
      active: element.activeFedNacion,
    };
    return parsedFhir;
  }
}
/*
{
  "patient": {
    "resourceType": "Patient",
    "identificador": [
      {
        "dominio": "dominio1",
        "id": "123"
      },
      {
        "dominio": "dominio2",
        "id": "456"
      }
    ],
    "documento": [
      {
        "tipo": "DNI",
        "numero": "123456789"
      },
      {
        "tipo": "CUIL",
        "numero": "201234567897"
      }
    ],
    "direccion": {
      "calle": "Avenida Siempre Viva 754",
      "codigo_postal": "8300",
      "ciudad": "Neuquén",
      "provincia": "Neuquén",
      "pais": "Argentina"
    },
    "apellidos": ["Martinez", "Lopez"],
    "nombres": ["Jose", "Maria"],
    "telefono": "299 123 4567",
    "email": "josem@martinezlopez.com",
    "celular": "299 987 6543",
    "sexo": "male",
    "fecha_nacimiento": "1980-01-02",
    "fed_nacion_id": "123123",
    "active": true
  }
}
 */
