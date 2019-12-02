import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BASE_URL } from 'src/app/consts/consts';

import { Pets } from '../../pets.model';

@Injectable()
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  getPets(): Observable<Pets[]>{
    return this.httpClient.get<Pets[]>(BASE_URL + 'pets/');
  }

  getPetsById(id: number): Observable<Pets>{
    return this.httpClient.get<Pets>(BASE_URL + 'pets/' + id);
  }
}
