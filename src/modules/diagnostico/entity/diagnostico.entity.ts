import { diagnosticoEstudios } from 'src/modules/diagnostico-estudios/entity/diagnostico-estudios.entity';
import { diagnosticoFeto } from 'src/modules/diagnostico-feto/entity/diagnostico-feto.entity';
import { diagnosticoSignosVitales } from 'src/modules/diagnostico-signos-vitales/entity/diagostico-signos-vitales.entity';
import { diagnosticoTactoVaginal } from 'src/modules/diagnostico-tacto-vaginal/entity/diagnostico-tacto-vaginal.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class diagnostico {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => diagnosticoFeto)
  @JoinColumn()
  feto: diagnosticoFeto;

  @OneToOne(() => diagnosticoTactoVaginal)
  @JoinColumn()
  tacto_vaginal: diagnosticoTactoVaginal;

  @OneToOne(() => diagnosticoEstudios)
  @JoinColumn()
  ecografia: diagnosticoEstudios;

  @OneToOne(() => diagnosticoSignosVitales)
  @JoinColumn()
  signosVitales: diagnosticoSignosVitales;
}
