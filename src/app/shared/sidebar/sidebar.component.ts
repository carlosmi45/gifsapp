import { Component, OnInit } from '@angular/core';

import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get historial() {
    return this.gifsService.historial;
  }

  search(query: string) {
    console.log("Buscando del historico:", query);
    this.gifsService.searchGifs(query);
  }

  ngOnInit(): void {
  }

}
