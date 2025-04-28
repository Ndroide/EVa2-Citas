import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { CitaComponent } from 'src/app/components/cita/cita.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, CitaComponent],
})
export class InicioPage implements OnInit {
  cita: { frase: string, autor: string } = { frase: '', autor: '' };
  private subscription: Subscription;

  constructor(private citaService: CitaService) {
    this.subscription = this.citaService.citas$.subscribe(citas => {
      if (citas.length > 0) {
        this.cita = citas[Math.floor(Math.random() * citas.length)];
      } else {
        this.cita = { frase: '', autor: '' };
      }
    });
  }

  async ngOnInit() {
    await this.citaService.cargarCitas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
