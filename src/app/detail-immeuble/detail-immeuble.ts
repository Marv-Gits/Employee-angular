import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImmeubleService } from '../service/immeuble-service';
import { first } from 'rxjs';

@Component({
  selector: 'app-detail-immeuble',
  imports: [],
  templateUrl: './detail-immeuble.html',
  styleUrl: './detail-immeuble.css',
})
export class DetailImmeuble implements OnInit {

  immeubleItem: any ;

  constructor(private route: ActivatedRoute, private immeubleService: ImmeubleService){

  }

  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
   console.log( this.immeubleItem );
   this.immeubleItem = this.immeubleService.findItem(faceSnapId)
   if (!this.immeubleItem) {
    
   }
   console.log();
   

  }

}
