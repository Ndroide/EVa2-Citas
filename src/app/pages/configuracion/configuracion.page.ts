import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
})
export class ConfiguracionPage {
  permitirEliminar: boolean = true;

  constructor(private configuracionService: ConfiguracionService) {}

  ionViewWillEnter() {
    this.permitirEliminar = this.configuracionService.getPermitirEliminar();
  }

  cambiarPermitirEliminar() {
    this.configuracionService.setPermitirEliminar(this.permitirEliminar);
  }
}