import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService} from './user-details.service';
import { RepoDetail, User, BioDetail} from './user-details'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:User
  userName
  isUserDetailsLoading:boolean =false


  constructor(private route: ActivatedRoute,private router:Router, private userDetailsService: UserDetailsService) {
    this.user = new User
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
       this.userName  = params['username']
       this.refresh()
    })
  }

  refresh(){
    this.user.repos = []
    this.isUserDetailsLoading = true
    let userBio = this.userDetailsService.getUserDetail(this.userName)
    let userRepo = this.userDetailsService.getUserRepos(this.userName)
    let finalResponse = forkJoin([userBio, userRepo])
    finalResponse.subscribe(response => {
      this.user.bioDetail = <BioDetail>response[0]
      this.user.repos = this.getUserRepos(response[1])
      this.isUserDetailsLoading = false
    },error=>{
      alert("Error on fetching user details")
      this.router.navigate(['/home'])
      this.isUserDetailsLoading = false
    })
  }

  getUserRepos(response): RepoDetail[]{
    let userRepos = []
    for (let repo of <[]>response) {
      let newRepo = new RepoDetail
      newRepo.name = repo['name']
      newRepo.description = repo['description']
      newRepo.repoLink = repo['html_url']
      newRepo.languages_url = repo['languages_url']
      userRepos.push(newRepo)
    }
    return userRepos
  }

}
