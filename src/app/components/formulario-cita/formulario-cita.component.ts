import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class FormularioCitaComponent {
  @Output() nuevaCita = new EventEmitter<{ frase: string; autor: string }>();

  citaForm = new FormGroup({
    frase: new FormControl('', [Validators.required, Validators.minLength(5)]),
    autor: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  agregarCita() {
    if (this.citaForm.valid) {
      const nuevaCita = {
        frase: this.citaForm.value.frase ?? '',
        autor: this.citaForm.value.autor ?? ''
      };
      this.nuevaCita.emit(nuevaCita);
      this.citaForm.reset();
    }
  }
}