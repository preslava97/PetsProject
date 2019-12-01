import { TestBed } from "@angular/core/testing"
import { AccountService } from './account.service';

describe('AccountService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('Should be Created', () => {
        const service: AccountService =TestBed.get(AccountService);
        expect(service).toBeTruthy();
    });
});