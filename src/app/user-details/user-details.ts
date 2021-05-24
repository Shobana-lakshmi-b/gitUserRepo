export class User {
  bioDetail = new BioDetail
  repos: RepoDetail[] = []
}

export class BioDetail {
  avatar_url: string = ''
  html_url: string = ''
  name: string = ''
  bio: string = ''
  location: string = ''
  twitter_username: string = ''
}

export class RepoDetail {
  name: string = ''
  description: string = ''
  repoLink: string = ''
  languages: string[] = []
  languages_url: string = ''
  isLoadedOnce:boolean = false
}


