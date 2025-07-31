import { Injectable } from '@nestjs/common';
import { PackageRaterDto } from './common/dto/packageRater.dto';

@Injectable()
export class AppService {
  getPackageRate({ owner, name }: PackageRaterDto) {
    return `${owner}/${name}`;
  }
}
