import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private permitirEliminar = true;
  private readonly PREFERENCIA_KEY = 'permitirEliminar';

  constructor() {
    this.cargarConfiguracion();
  }

  async cargarConfiguracion() {
    const { value } = await Preferences.get({ key: this.PREFERENCIA_KEY });
    if (value !== null) {
      this.permitirEliminar = JSON.parse(value);
    }
  }

  getPermitirEliminar(): boolean {
    return this.permitirEliminar;
  }

  async setPermitirEliminar(valor: boolean) {
    this.permitirEliminar = valor;
    await Preferences.set({ key: this.PREFERENCIA_KEY, value: JSON.stringify(valor) });
  }
}