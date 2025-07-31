import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PackageRaterDto } from './common/dto/packageRater.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPackageRate(@Query() packageRaterDto: PackageRaterDto) {
    return this.appService.getPackageRate(packageRaterDto);
  }
}
