import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Equipe } from '../entities/models';
import { EquipeService } from '../services/equipe.service'

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipe: Equipe;
  constructor(private service : EquipeService, private router :Router) { }

  ngOnInit(): void {
  }

  submit(addform) {

    //alert(addform.value.num + " " + addform.value.name + " " + addform.value.country);
    this.equipe = { 
      id: addform.value.num,
      name: addform.value.name,
      country:addform.value.country
    }

    this.service.addEquipe(this.equipe).subscribe(
      response => {
        alert("Ajout avec succès de l'équipe!");
        this.router.navigate(["/ListEquipes"]);
       }
    );
   }
}
