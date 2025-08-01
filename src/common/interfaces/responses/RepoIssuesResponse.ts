export interface RepoIssuesResponse {
  id: number;
  node_id: string;
  url: string;
  actor: Actor;
  event: Event;
  commit_id: null | string;
  commit_url: null | string;
  created_at: Date;
  issue: Issue;
  performed_via_github_app: null;
  rename?: Rename;
  state_reason?: null;
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

export enum Event {
  Closed = 'closed',
  HeadRefDeleted = 'head_ref_deleted',
  HeadRefForcePushed = 'head_ref_force_pushed',
  Merged = 'merged',
  Renamed = 'renamed',
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: Actor;
  labels: any[];
  state: State;
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: null;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date | null;
  author_association: AuthorAssociation;
  type: null;
  active_lock_reason: null;
  draft: boolean;
  pull_request: PullRequest;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export enum AuthorAssociation {
  Contributor = 'CONTRIBUTOR',
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: Date | null;
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export enum State {
  Closed = 'closed',
  Open = 'open',
}

export interface Rename {
  from: string;
  to: string;
}
