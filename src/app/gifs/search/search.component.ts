import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifsService: GifsService) {

  }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(termino: string) {
    if (termino.trim().length === 0) {
      return;
    }
    console.log('Estoy buscando: ', termino);

    this.gifsService.searchGifs(termino)

    //const valor = this.txtBuscar.nativeElement.value;
    //console.log('Estoy buscando: ', valor);
    this.txtBuscar.nativeElement.value = '';
    // this.txtBuscar.nativeElement.focus;
  }
  
}
