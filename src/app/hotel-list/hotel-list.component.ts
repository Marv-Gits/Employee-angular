import { Component } from "@angular/core";

@Component({
    selector: 'app-hotel-list',
    templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent{
public title = 'Liste hotel';

public hotel : any[] = [];
public nomHotel : string = 'MyHotel';

}