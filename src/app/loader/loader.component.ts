import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() isHeaderLoading = false
  @Input() isContentLoading = false

  constructor() { }

  ngOnInit(): void {
  }

}
