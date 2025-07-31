import { IsString, MinLength } from 'class-validator';

export class PackageRaterDto {
  @IsString()
  @MinLength(1)
  owner: string;

  @IsString()
  @MinLength(1)
  name: string;
}
