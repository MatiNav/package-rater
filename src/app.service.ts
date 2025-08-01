import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PackageRaterDto } from './common/dto/packageRater.dto';
import {
  ActivityType,
  RepoActivityResponse,
} from './common/interfaces/responses/RepoActivityResponse';
import { RepoIssuesResponse } from './common/interfaces/responses/RepoIssuesResponse';
import { FetchService } from './common/services/fetch';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');
  private readonly githubURL = 'https://api.github.com/';

  constructor(private readonly fetchService: FetchService) {}

  async getPackageRate({ owner, name }: PackageRaterDto) {
    try {
      const activityPath = 'activity';
      const issuesPath = 'issues/events';

      const [activityRate, issuesRate] = await Promise.all([
        this.classifyRateStrategy(activityPath, owner, name),
        this.classifyRateStrategy(issuesPath, owner, name),
      ]);

      let totalScore = activityRate - issuesRate;

      if (totalScore > 5) totalScore = 5;
      if (totalScore < 0) totalScore = 0;

      return { totalScore };
    } catch (error: any) {
      this.logger.log(error.message || 'An error ocurred');
      throw new InternalServerErrorException('An error ocurred');
    }
  }

  async classifyRateStrategy(
    path: string,
    owner: string,
    name: string,
  ): Promise<number> {
    try {
      const repoUrl = `${this.githubURL}repos/${owner}/${name}/`;
      const response = await this.fetchService.get<unknown>(repoUrl + path);

      switch (path) {
        case 'issues/events':
          return (response as RepoIssuesResponse[]).reduce(
            (acc, { issue }) => acc + (issue.closed_at ? 1 : -1) / 6,
            0,
          );
        case 'activity':
          return (
            (response as RepoActivityResponse[]).reduce(
              (acc, curr) =>
                acc +
                (curr.activity_type === ActivityType.BranchDeletion ? -1 : 1),
              0,
            ) / 6
          );
        default: {
          this.logger.log(`Error on Strategy: ${path} path not supported.`);
          throw new InternalServerErrorException('');
        }
      }
    } catch (e) {
      this.logger.log(e.message || 'An error ocurred');
      throw new InternalServerErrorException('An error ocurred');
    }
  }
}
