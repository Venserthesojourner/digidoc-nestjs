import { ApiProperty } from '@nestjs/swagger';
//import { Type } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
//import { CreateChangelogDto } from 'src/commons/embeds/create-changelog.dto';

export class CreateVacunasDto {
  @IsString()
  @ApiProperty()
  nombre?: string;

  @IsBoolean()
  @ApiProperty()
  poseeVacuna?: boolean;

  /*  @Type(() => CreateChangelogDto)
  @ApiProperty()
  @ValidateNested()
  changelog?: CreateChangelogDto;*/
}
