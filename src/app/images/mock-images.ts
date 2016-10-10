export class ImageUrl {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

export const DEFAULTURL: string = "assets/icons/default.png";

export const IMAGELIST: ImageUrl[] = [
  { name: 'Gogs', url: 'assets/icons/gogs.png' },
  { name: 'Mediawiki', url: 'assets/icons/mediawiki.png' },
  { name: 'Gitlab', url: 'assets/icons/gitlab.png' },
  { name: 'SAMBA', url: 'assets/icons/samba.png' },
  { name: 'LDAP', url: 'assets/icons/ldap.png' },
  { name: 'Jenkins', url: 'assets/icons/jenkins.png' },
  { name: 'Mysql', url: 'assets/icons/mysql.png' },
  { name: 'default', url: 'assets/icons/default.png' },
];
