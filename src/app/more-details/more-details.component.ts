import { GymService } from './../gym.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Gym} from '../gym';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  gym : Gym;

  constructor(
    private route: ActivatedRoute, 
    private gymservice: GymService
    ) {}
  

  //@Input() theGym: Gym;


  ngOnInit(): void {
    this.getGym();
  }

  getGym(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gymservice.getGym(id)
      .subscribe(gym => this.gym = gym);
  }

}
