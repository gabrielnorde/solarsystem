import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

 @Component({
   selector:'app-root',
   templateUrl: './app.component.html',
   styleUrls:['./app.component.html']
 })
 
 export class AppComponent{

    listaPlanetas
  
    constructor(conexaoApi:HttpClient){

      conexaoApi.get('http://localhost:3000/v2/dados')
                .subscribe(
                  (dadosApi) => {
                    this.listaPlanetas = dadosApi  
                });

    }

}