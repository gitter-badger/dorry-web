export class ImageInfo {
  url: string;
  RepoTags: Object[];

  constructor(url: string, RepoTags: Object[]) {
    this.url = url;
    this.RepoTags = RepoTags;
  }
}
