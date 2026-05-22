import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImmeubleService {
   private http = inject(HttpClient);
  private details: any[] = [
      {
        surface: 2040,
        countRoom: 4,
        city: "Yaounde 1",
        id: 1
      },
       {
        id: 2,
        surface: 200,
        countRoom: 5,
        city: "Yaounde 2"
      },
       {
        id: 3,
        surface: 200,
        countRoom: 4,
        city: "Yaounde 3"
      }
    ]

    getDetails(): any[] {
      return [...this.details,
        {
        id: 5,
        surface: 200,
        countRoom: 5,
        city: "Yaounde 5"
      },
       {
        id: 4,
        surface: 200,
        countRoom: 4,
        city: "Yaounde 4"
      }
      ];
    }

    addHotel(item: any){
      this.getDetails().push(item);

    }

    findItem(identifiant: number): any{
      console.log(identifiant);
      
      return this.getDetails().find( item => item.id==identifiant );
    }

    deleteItem(identifiant: number): any{
      return this.getDetails().filter( item => item.id!=identifiant );
    }

    getAlEmployees() {
    return this.http.get<any[]>('http://localhost:8080/employees');

    }


    getAddEmployees(employees: any){

    }
}

