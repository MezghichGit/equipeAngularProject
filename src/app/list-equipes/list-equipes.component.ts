import { Component, OnInit } from '@angular/core';
import { Equipe } from '../entities/models';
import { EquipeService } from '../services/equipe.service'

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  equipes: Equipe[];
  constructor(private service : EquipeService) { }

  ngOnInit(): void {
    this.service.listEquipes().subscribe(
      response => {
        console.log(response);
        this.equipes = (<Equipe[]>response);
      }
    );
  }

}
