import { Injectable } from '@angular/core';
import { Boda } from '../interfaces/boda';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BodaService {

  bodas: Boda[] = [];
  bodaCounter = 0;

  constructor(private storage: Storage) {
      
    
      this.getBodas().then(
        data => {
          this.bodas = data;
          this.bodas.forEach(
            b => {
              if (b.id > this.bodaCounter) {
                this.bodaCounter++;
              }
            });
          this.bodaCounter++;
        }
      );
  }


  getBodas(): Promise<Boda[]> {

    return this.storage.get('bodas');

  }

  saveBoda(b): Promise<Boda[]> { // devuelve una promesa
    this.bodas[this.bodas.findIndex(boda => boda.id === b.id)] = b;
    return this.storage.set('bodas', this.bodas);
  }

  newBoda(b): Promise<Boda[]> {
    this.bodas.push(b);
    this.bodaCounter++;
    return this.storage.set('bodas', this.bodas).then(() =>
      this.storage.set('bodaCounter', this.bodaCounter)
    ); // devolver promesa
  }

  deleteBoda(id: number): Promise<Boda[]> {
    this.bodas = this.bodas.filter(b => b.id !== id);
    return this.storage.set('bodas', this.bodas);
  }

  getBodaById(id: number): Boda {
    return this.bodas.find(b => b.id === id);
  }
}