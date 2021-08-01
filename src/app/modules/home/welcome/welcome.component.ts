import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getStudents().then(console.log).catch(console.error);
  }

}
