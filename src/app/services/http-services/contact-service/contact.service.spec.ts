import { TestBed } from "@angular/core/testing";

import { ContactsService } from './contact.service';
import { from } from 'rxjs';

describe('ContactService', () => {
    beforeEach(() =>TestBed.configureTestingModule({}));

    it('Should be Created', ()=> {
        const service: ContactsService =TestBed.get(ContactsService);
        expect(service).toBeTruthy();
    })
})