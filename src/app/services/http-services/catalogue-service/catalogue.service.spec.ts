import { TestBed } from "@angular/core/testing"
import { CatalogueService } from './catalogue.service';

describe('Catalogueservice', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('Should be created', () => {
        const service: CatalogueService = TestBed.get(CatalogueService);
        expect(service).toBeTruthy();

    });
})