import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialSeach : string[] = [];

  get historial(){
    return [...this._historialSeach];
  }

  searchGifs(query : string = ''){

    query = query.trim().toLocaleLowerCase();
    console.log("Search: ", query)
    if (!this._historialSeach.includes(query)) {
      this._historialSeach.unshift(query);
      this._historialSeach = this._historialSeach.splice(0, 10)
      console.log(this._historialSeach);
    } 
  }

  constructor() { }
}
