import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogue } from './models/catalogue.model';
import { BASE_URL } from 'src/app/consts/consts';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogueService {
    constructor(private httpClient: HttpClient){}

    getCatalogue(): Observable<Catalogue[]> {
        return this.httpClient.get<Catalogue[]>(BASE_URL + 'catalogue');

    }

    getCatalogueById(id: number): Observable<Catalogue> {
        return this.httpClient.get<Catalogue>(BASE_URL + 'catalogue/' + id)
    }
}