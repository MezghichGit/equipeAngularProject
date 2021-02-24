import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from '../entities/models';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  id: string;
  equipe : Equipe
  constructor(private service: EquipeService, private routeActive : ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActive.paramMap.subscribe(params => {
      this.id = params.get('num');
      //alert(this.id)
    }
    );

    // récupération de l'équipe à modifier

    this.service.uneEquipe(Number(this.id)).subscribe(
      response => {
        this.equipe = (<Equipe>response);
        console.log(this.equipe);
      }
    )
 
  }

}
