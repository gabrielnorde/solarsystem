import { Component, Input } from "@angular/core";

@Component({
    selector:'planeta',
    templateUrl: './planeta.component.html',
    styles: ['']
})

export class PlanetaComponent{

    @Input() dados

    titulo:string = '';
    imagem:string = '';
    descricao:string = '';

    ngOnInit(){
        this.titulo = this.dados.titulo;
        this.imagem = this.dados.imagem;
        this.descricao = this.dados.conteudo;
    };

   

}
