export interface RepoActivityResponse {
  id: number;
  node_id: string;
  before: string;
  after: string;
  ref: string;
  timestamp: Date;
  activity_type: ActivityType;
  actor: Actor;
}

export enum ActivityType {
  BranchCreation = 'branch_creation',
  BranchDeletion = 'branch_deletion',
  ForcePush = 'force_push',
  PRMerge = 'pr_merge',
}

export interface Actor {
  login: Login;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: GistsURL;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  user_view_type: UserViewType;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersRenovate5Bbot5DEventsPrivacy = 'https://api.github.com/users/renovate%5Bbot%5D/events{/privacy}',
  HTTPSAPIGithubCOMUsersShchepotinEventsPrivacy = 'https://api.github.com/users/Shchepotin/events{/privacy}',
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersRenovate5Bbot5DGistsGistID = 'https://api.github.com/users/renovate%5Bbot%5D/gists{/gist_id}',
  HTTPSAPIGithubCOMUsersShchepotinGistsGistID = 'https://api.github.com/users/Shchepotin/gists{/gist_id}',
}

export enum Login {
  RenovateBot = 'renovate[bot]',
  Shchepotin = 'Shchepotin',
}

export enum NodeID {
  MDM6Qm90MjkxMzk2MTQ = 'MDM6Qm90MjkxMzk2MTQ=',
  MDQ6VXNlcjYwMDE3MjM = 'MDQ6VXNlcjYwMDE3MjM=',
}

export enum Type {
  Bot = 'Bot',
  User = 'User',
}

export enum UserViewType {
  Public = 'public',
}
