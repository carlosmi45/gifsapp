import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioUrl: string = "https://api.giphy.com/v1/gifs";
  private apyKey: string = '7DGikUq7ZDOhbF2MzGmFN5u19rRExdZN';

  private _historialSeach: string[] = [];

  public resultados: Gif[] = [];

  

  constructor(private http: HttpClient) {
      this._historialSeach = JSON.parse(localStorage.getItem('historial')!) || [];

      this.resultados =  JSON.parse(localStorage.getItem('searchGifs')!) || [];
  }

  get historial(): string[] {
    return [...this._historialSeach];
  }

  searchGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();
    console.log("Search: ", query)
    if (!this._historialSeach.includes(query)) {
      this._historialSeach.unshift(query);
      this._historialSeach = this._historialSeach.splice(0, 10)

      // Guardando la información en el local store.
      localStorage.setItem('historial', JSON.stringify(this._historialSeach));
    }

    this.searchGifsApi(query);
  }

  private searchGifsApi(query: string) {

    const params = new HttpParams()
    .set('api_key', this.apyKey)
    .set('limit', '10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params}).subscribe(
      (resp) => {
        console.log(resp.data);
        this.resultados = resp.data;

        // Guardando la información en el local store.
        localStorage.setItem('searchGifs', JSON.stringify(this.resultados));
      }
    );
  }

}
