import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public faq: any;
  

  constructor() {
    this.faq = [
      {
        question: 'Why should I pick you over others especially considering people with higher skillsets?',
        answer: 'I am always willing to learn and even start from the basics if I have to. With my knowledge of fundamentals, I can quickly pick up any required tool not initially familiar.',
        open: false
      },
      {
        question: 'What is your core advantage?',
        answer: 'I have the ability and humility to work with people. I am a team player',
        open: false
      },
      {
        question:'What is your output to the community?',
        answer:'I sometimes collaborate on open source softwares and I also write technical content at https://afobaje.hashnode.dev'

      },
      {
        question: 'What is your tech stack?',
        answer: 'I am a MERN,MEAN and laravel developer ',
        open: false
      },
      {
        question: 'Can you start work immediately?',
        answer: 'Yes, I can',
        open: false
      },
    ];
    
  }

  displayAnswer(val:any,open: boolean) {
    open = !open
    val.open=open
  }
  ngOnInit(): void {
  }

}
