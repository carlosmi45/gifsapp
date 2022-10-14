import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsServices: GifsService) { }

  get resultados(): Gif[] {
    return this.gifsServices.resultados;
  }

  ngOnInit(): void {
  }

}
