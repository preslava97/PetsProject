import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from 'src/app/services/pets.model';
import { PetsService } from 'src/app/services/http-services/pets-service/pets.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit, OnDestroy {
  pets$: Observable<Pets[]>;

  constructor(public petsService: PetsService) { }

  ngOnInit(): void {
    this.pets$ = this.petsService.getPets();
  }

  ngOnDestroy(): void {
  }

}
