import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public setTrue: boolean;
  constructor() {
    this.setTrue = false;
  }

  ngOnInit(): void {
  }
  toggle() {
    this.setTrue = !this.setTrue;
  }

}
