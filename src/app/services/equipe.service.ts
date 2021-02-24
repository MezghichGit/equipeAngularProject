import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Equipe} from '../entities/models'

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl: string = "http://127.0.0.1:85/equipes";

  constructor(private http: HttpClient) { }


  // méthode de récupération de toutes les équipes
  public listEquipes() { 
    return this.http.get(this.baseUrl);
  }

  // méthode de récupération d'une seule équipe
  public uneEquipe(id:number) { 
    return this.http.get(this.baseUrl+'/'+id);
  }
 // méthode pour ajouter une équipe
  public addEquipe(equipe : Equipe) { 
    return this.http.post(this.baseUrl, equipe);
  }

 // méthode pour modifier une équipe
 public updateEquipe(equipe : Equipe) { 
  return this.http.put(this.baseUrl+'/'+equipe.id, equipe);
 }

 // méthode pour supprimer une équipe
 public deleteEquipe(id:number) { 
  return this.http.delete(this.baseUrl+'/'+id);
 }

}



  