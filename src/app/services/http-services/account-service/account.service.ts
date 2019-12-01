import { Injectable } from "@angular/core";
import { HttpClient } from 'selenium-webdriver/http';
import { Login } from './models/login.model';

@Injectable()
export class AccountService{
    constructor(private httpClient: HttpClient){}

    login(Login: Login): void{
        
    }
    
}