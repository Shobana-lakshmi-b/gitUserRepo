import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { UserDetailsService } from '../user-details.service';
import { RepoDetail } from '../user-details';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})

export class ListReposComponent {
  @Input('userRepos') repos: RepoDetail[] = []
  page = 1
  pageSize = 10;
  isRepoLangLoading: boolean = false

  constructor(private userDetailsService: UserDetailsService, private router: Router) { }

  ngOnChanges(changes): void {
    if (changes['repos']['currentValue'].length)
      this.updateLanguages()
  }

  updateLanguages(start = 0, end = this.pageSize - 1) {
    if (this.repos[start].isLoadedOnce) return

    end = this.getValidEndIndex(end)

    this.isRepoLangLoading = true
    let responses = []

    for (let i = start; i <= end; i++) {
      responses.push(this.userDetailsService.getLanguagesInRepo(this.repos[i]['languages_url']))
    }

    let finalResponse = forkJoin(responses)
    finalResponse.subscribe(res => {
      for (let i = start, resIndex = 0; i <= end; i++ , resIndex++) {
        this.repos[i].languages = Object.keys(res[resIndex])
        this.repos[i].isLoadedOnce = true
      }
      this.isRepoLangLoading = false
    }, error => {
        this.handleError(error)
    })
  }

  getValidEndIndex(end) {
    let length = this.repos.length
    return end >= length ? length-1 : end
  }

  handleError(error) {
    alert(error)
    this.isRepoLangLoading = false
    this.router.navigate(['/home'])
  }

  loadPage(currentPage) {
    let endIndex = (currentPage * this.pageSize) -1
    let startIndex = endIndex - (this.pageSize-1)
    this.updateLanguages(startIndex, endIndex)
  }

}
