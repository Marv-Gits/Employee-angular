import { Component, OnInit } from '@angular/core';
import { ImmeubleService } from '../service/immeuble-service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from '../nav-bar-component/nav-bar-component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-list-immeuble-hotel',
  imports: [MatButtonModule, MatIconModule, NavBarComponent, RouterLink, AsyncPipe ],
  standalone: true,
  templateUrl: './list-immeuble-hotel.html',
  styleUrl: './list-immeuble-hotel.css',
})
export class ListImmeubleHotel implements OnInit{
  details: any[]=[];

   employees$!: Observable<any[]>

  constructor(private immeubleService: ImmeubleService){
  
  }

  ngOnInit(): void {
     
    this.employees$ = this.immeubleService.getAlEmployees();
    this.details = this.immeubleService.getDetails();
  }

  
}
