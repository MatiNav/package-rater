import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HTTPAdapter } from '../interfaces/http';

@Injectable()
export class FetchService implements HTTPAdapter {
  private readonly GITHUB_TOKEN: string;

  constructor(private readonly configService: ConfigService) {
    this.GITHUB_TOKEN = this.configService.getOrThrow('GITHUB_TOKEN');
  }

  get<T>(url: string): Promise<T> {
    return fetch(url, {
      headers: { Authorization: `Bearer ${this.GITHUB_TOKEN}` },
    }).then((res) => res.json() as T);
  }
}
