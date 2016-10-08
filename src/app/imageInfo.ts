export class ImageInfo {
  id: string;
  parentId: string;
  repoTags: string;
  repoDigests: string;
  created: string;
  size: string;
  virtualSize: string;
  labels: string;

  constructor(
    id: string,
    parentId: string,
    repoTags: string,
    repoDigests: string,
    created: string,
    size: string,
    virtualSize: string,
    labels: string
  ) {
    this.id = id;
    this.parentId = parentId;
    this.repoTags = repoTags;
    this.repoDigests = repoDigests;
    this.created = created;
    this.size = size;
    this.virtualSize = virtualSize;
    this.labels = labels;
  }
}
