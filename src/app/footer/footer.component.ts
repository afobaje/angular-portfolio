import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


 
  constructor() { }

  ngOnInit(): void {
  }

  drawShape(a:any){
    let ctx=a.getContext('2d')
    console.log(ctx)
  }
}
