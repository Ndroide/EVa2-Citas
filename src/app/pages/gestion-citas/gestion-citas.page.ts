import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { CitaComponent } from 'src/app/components/cita/cita.component';
import { FormularioCitaComponent } from 'src/app/components/formulario-cita/formulario-cita.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, CitaComponent, FormularioCitaComponent],
})
export class GestionCitasPage implements OnDestroy {
  citas: { frase: string, autor: string }[] = [];
  private subscription: Subscription;

  constructor(private citaService: CitaService) {
    this.subscription = this.citaService.citas$.subscribe(citas => {
      this.citas = citas;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ionViewWillEnter() {
    this.citaService.cargarCitas(); // <-- Ya no es async, no necesitas await
  }

  agregarCita(event: { frase: string, autor: string }) {
    this.citaService.agregarCita(event.frase, event.autor);
  }

  eliminarCita(index: number) {
    this.citaService.eliminarCita(index);
  }
}
