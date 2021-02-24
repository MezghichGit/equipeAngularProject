import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private service: EquipeService, private routeActive : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.routeActive.paramMap.subscribe(params => {
      this.id = params.get('num');
      console.log('id = ' + this.id);
      //alert(this.id)

      // récupération de l'équipe à modifier

    this.service.uneEquipe(Number(this.id)).subscribe(
      response => {
        this.equipe = (<Equipe>response);
        console.log("equipe :" + this.equipe);
        //console.log("equipe :"+this.equipe[1].name);
      }
    )
 
    }
    );

    
  }

  public save() { 
    //alert("Mise à jour avec succès de l'équipe!");
    console.log(this.equipe);
    this.service.updateEquipe(this.equipe
      
      /*{
      id: this.equipe.id,
      name: this.equipe.name,
      country:this.equipe.country
      }*/
    
    ).subscribe(
      () => {
        alert("Mise à jour avec succès de l'équipe!");
        //console.log("Ok");
        this.router.navigate(["/ListEquipes"]);
      }
    );
    //

  }

}
