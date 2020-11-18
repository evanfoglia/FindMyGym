import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.css']
})
export class HelpButtonComponent implements OnInit {

   answereSelect: string;
   answerArray: any = [];

  questions = [
    {
      text: "What's your budget?",
      options: ["Under $15", "$15-$30", "$30+"],
      selected: null
    },
    {
      text: 'Are you training for general fitness or a sport?',
      options: ["General Fitness", "Sport"],
      selected: null
    },
    {
      text: 'When do you like to workout?', 
      options: ["Mornings", "Afternnons", "Evenings"],
      selected: null
    },
    {
      text: 'Are group fitness classes a priority?', 
      options: ["Yes", "No"],
      selected: null
    },
    {
      text: 'Are you a FSU Student or faculty member', 
      options: ["Yes", "No"],
      selected: null
    },
    {
      text: 'What type of equipment do you like to use?', 
      options: ["Free weights", "Machines", ],
      selected: null
    },
    {
      text: 'Are you looking for a personal trainer?', 
      options: ["Yes", "No" ],
      selected: null
    }
  ];

  onSubmit () {
    this.questions.forEach((val) => {
      this.answereSelect = val.options[val.selected];
      console.log(this.answereSelect);

      for (var i=0; i<7; i++) 
      {
        this.answerArray[i] = this.answereSelect;
        //console.log(this.answerArray[i] + i);
      }
    })
    //console.log(this.answerArray[0]);


    /*if (this.answerArray[4]=="Yes") {
      console.log(this.answerArray[4]);
      this.router.navigate(['/moredetails', 6]);
    }
    else if (this.answerArray[0]=="Under $15") {
      console.log(this.answerArray[4]);
      this.router.navigate(['/moredetails', 10]);
    }*/
  }
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
