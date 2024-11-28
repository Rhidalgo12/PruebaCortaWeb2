import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetAll } from '../interfaces/ResponseAPI_GetAll';
import { firstValueFrom, lastValueFrom } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class RymServicesService {

  private baseUrl: string = "https://rickandmortyapi.com/api";
  public errors: string[] = [];

  private http = inject(HttpClient);


  async getAllCharacters(): Promise<ResponseAPIGetAll> {
    try {
      const response = await lastValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}/character`));
      return Promise.resolve(response); 
    } catch (error) {
      console.error(error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error); 
    }
  }

 
  async Pagination(url: string): Promise<ResponseAPIGetAll> {
    try {
      const response = await lastValueFrom(this.http.get<ResponseAPIGetAll>(url));
      return Promise.resolve(response); 
    } catch (error) {
      console.error(error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);  
    }
  }

  async getCharacter(name: string): Promise<ResponseAPIGetAll> {
    try {
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}/character/?name=${name}`));
      return Promise.resolve(response); 
    } catch (error) {
      console.error(error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error); 
    }
  }
}
