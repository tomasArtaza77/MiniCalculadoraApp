import { Component } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Pequeña';
  mensaje = '';
  numero1: number=0;
  numero2: number=0;
  resultadoParcial: number=0;
  resultado: number=0;
  bandera = false;
  


  suma():void{
    this.resultadoParcial = this.numero1+this.numero2;
    
  }

  resta():void{
    this.resultadoParcial = this.numero1-this.numero20202;
    
    
  }
  dividir():void{
    this.resultadoParcial = this.numero1/this.numero2;
    
  }
  multiplicar():void{
    this.resultadoParcial = this.numero1*this.numero2;
    
  }

  igual():void{
    this.resultado = this.resultadoParcial;
    this.mensaje = 'Calculo realizado con exito.'
    this.bandera = true;
  }

}
