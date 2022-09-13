import { diagnosticoEstudios } from 'src/modules/diagnostico-estudios/entity/diagnostico-estudios.entity';
import { diagnosticoFeto } from 'src/modules/diagnostico-feto/entity/diagnostico-feto.entity';
import { diagnosticoSignosVitales } from 'src/modules/diagnostico-signos-vitales/entity/diagostico-signos-vitales.entity';
import { diagnosticoTactoVaginal } from 'src/modules/diagnostico-tacto-vaginal/entity/diagnostico-tacto-vaginal.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente_diagnostico')
export class diagnostico {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => diagnosticoFeto, (diagnosticoFeto) => diagnosticoFeto.id)
  @JoinColumn({ name: 'diagnostico_feto_id' })
  feto: diagnosticoFeto;

  @OneToOne(() => diagnosticoTactoVaginal)
  @JoinColumn({ name: 'diagnostico_tacto_vaginal_id' })
  tacto_vaginal: diagnosticoTactoVaginal;

  @OneToOne(() => diagnosticoEstudios)
  @JoinColumn({ name: 'diagnostico_ecografia_id' })
  ecografia: diagnosticoEstudios;

  @OneToOne(() => diagnosticoSignosVitales)
  @JoinColumn({ name: 'diagnostico_signos_vitales_id' })
  signosVitales: diagnosticoSignosVitales;
}
