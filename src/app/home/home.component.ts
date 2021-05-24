import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  gitUsername = 'shobana-lakshmi-b'

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  showRepos() {
    this.router.navigate([`../user/${this.gitUsername}`], { relativeTo: this.route })
  }

}
