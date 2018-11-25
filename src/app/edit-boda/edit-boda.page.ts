import { Component, OnInit } from '@angular/core';
import { Boda } from '../interfaces/boda';
import { BodaService } from '../services/boda.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-boda',
  templateUrl: './edit-boda.page.html',
  styleUrls: ['./edit-boda.page.scss'],
})
export class EditBodaPage implements OnInit {

  boda: Boda;
  edit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bodaService: BodaService,
    private navController: NavController) {

    this.boda = {
      id: this.bodaService.bodaCounter,
      nombre: '',
      fecha: '',
      direccion: '',
      hora: '',
      invitados: 0
    };
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.edit = true;
      this.boda = this.bodaService.getBodaById(+id);
    }
  }

  saveBoda(b: Boda) {
    if (this.edit) {
      this.bodaService.saveBoda(this.boda).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    } else {
      this.bodaService.newBoda(this.boda).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    }
  }
}
