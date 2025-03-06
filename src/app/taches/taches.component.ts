import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Tachestypes } from '../tachestypes';
import { CapitalizePipePipe } from '../capitalize-pipe.pipe';

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule,FormsModule, CapitalizePipePipe],
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {

  
   tache : string = '';
   taches : Tachestypes[] = [
    {  titreTache : 'Sprint 0 specification des besoins', checkedTache : false }
   ];
   modIndex : boolean  = false ; // modIndex = false Ajout sinon modif
   numeroIndex : number = 0;  

  ajouterTaches() : void {
    if(this.tache.trim() && this.modIndex == false ) {
 //       this.taches.push(this.tache.trim());
          this.taches.push({titreTache : this.tache, checkedTache : true});
 //       this.taches[this.i++] = this.tache.trim() ;
    } else if(this.modIndex == true ) { 
          this.taches.splice(this.numeroIndex, 1 , {titreTache : this.tache, checkedTache : false} )
 //       this.taches[this.numero] = this.tache.trim() ;
           this.modIndex = false;
    }

    this.tache = '';

  }

  supprimerTaches( index : number) {
    this.taches.splice(index,1);
  }

  modiferTaches( index : number) {
    this.modIndex = true;  
    this.numeroIndex = index;  
    this.tache = this.taches[index].titreTache;
  }


  changerCouleur(index:number) : any {
    return { 'color' : this.taches[index].checkedTache == false ? 'red' : 'green'}
  }

}
