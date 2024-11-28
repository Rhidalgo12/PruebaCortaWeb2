import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {RymServicesService} from '../../services/rym-services.service';
import { SearchComponent } from '../../components/search/search.component';
import { FormsModule , } from '@angular/forms';
import { Character } from '../../interfaces/Character';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'RickAndMorty-Page-home',
  standalone: true,
  imports: [ButtonComponent, SearchComponent, FormsModule,CommonModule],
  providers: [RymServicesService],
  templateUrl: './rym-home.component.html',
  styleUrl: './rym-home.component.css'
})
export class RYMHomeComponent {

  private rymService: RymServicesService = inject(RymServicesService);

  public prevPageUrl: string = '';  
  public nextPageUrl: string = ''; 
  public characters: Character[] = [];
  

  constructor() { 
    this.cargarPagina("https://rickandmortyapi.com/api/character/");
    this.getAllCharacters();
  }

  getAllCharacters() {
    console.log("Obteniendo personajes...");
  }
  cargarPagina(url: string) {
    this.rymService.Pagination(url).then((response) => {
      console.log(response);

      this.characters = response.results;
      this.prevPageUrl = response.info.prev ?? '';  
      this.nextPageUrl = response.info.next ?? '';  
    }).catch((error) => {
      console.error('Error al cargar la página', error);
    });
  }

  
  paginaAnterior() {
    if (this.prevPageUrl) {
      this.cargarPagina(this.prevPageUrl);  
    } else {
      console.log("No hay más páginas anteriores.");
    }
  }


  paginaSiguiente() {
    if (this.nextPageUrl) {
      this.cargarPagina(this.nextPageUrl);  
    } else {
      console.log("No hay más páginas siguientes.");
    }
  }

  searchCharacter(name: string) {
    const Url = `https://rickandmortyapi.com/api/character/?name=${name}`;  
    this.rymService.Pagination(Url).then((response) => {
      console.log(response);
      this.characters = response.results;
      this.prevPageUrl = response.info.prev ?? '';
      this.nextPageUrl = response.info.next ?? '';
    }).catch((error) => {
      console.error('Error al cargar la página',error);
    });
  
  }

}
