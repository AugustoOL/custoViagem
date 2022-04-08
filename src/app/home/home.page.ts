import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precoGasolina : number = 0;
  distanciaViagem : number = 0;
  consumoCarro : number = 0;
  gastoTotal : number = 0;

  constructor() {}

  

  calcularGastoTotal(){
    this.gastoTotal = this.precoGasolina * this.distanciaViagem / this.consumoCarro ;
  }


}
