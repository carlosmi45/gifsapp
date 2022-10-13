import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
