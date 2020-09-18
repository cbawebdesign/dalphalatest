import { Component, OnInit, NgZone } from '@angular/core';
//import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  


  constructor(  //public authService: AuthService,
    public ngZone: NgZone,private router: Router ) { }

  ngOnInit() {

    }
}