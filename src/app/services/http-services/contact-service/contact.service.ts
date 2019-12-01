import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/message.model';

@Injectable()
export class ContactsService {
  constructor(private httpClient: HttpClient) { }

  sendMessage(message: Message): Observable<any>{
      return this.httpClient.post('' , message);
  }

}