import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class CitaComponent {
  @Input() frase!: string;
  @Input() autor!: string;
  @Input() puedeEliminar: boolean = false;
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit();
  }
}