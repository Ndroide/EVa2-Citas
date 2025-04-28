import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citasSubject = new BehaviorSubject<{ frase: string, autor: string }[]>([]);
  citas$ = this.citasSubject.asObservable();
  private storageKey = 'citas_storage';

  constructor() {
    this.cargarCitas();
  }

  async cargarCitas() {
    const { value } = await Preferences.get({ key: this.storageKey });
    if (value) {
      const citas = JSON.parse(value);
      this.citasSubject.next(citas);
    } else {
      this.citasSubject.next([]);
    }
  }

  async agregarCita(frase: string, autor: string) {
    const nuevasCitas = [...this.citasSubject.value, { frase, autor }];
    await Preferences.set({
      key: this.storageKey,
      value: JSON.stringify(nuevasCitas),
    });
    this.citasSubject.next(nuevasCitas);
  }

  async eliminarCita(index: number) {
    const citasActuales = [...this.citasSubject.value];
    citasActuales.splice(index, 1);
    await Preferences.set({
      key: this.storageKey,
      value: JSON.stringify(citasActuales),
    });
    this.citasSubject.next(citasActuales);
  }
}
