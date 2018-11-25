import { Component, OnInit } from '@angular/core';
import { BodaService } from '../services/boda.service';
import { Boda } from '../interfaces/boda';
import { DetalleBodaPage } from '../detalle-boda/detalle-boda.page';
import { AlertController, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  bodas: Boda[] = [];

  constructor(
    private bodaService: BodaService,
    private alertController: AlertController,
    private navController: NavController,
    private modalController: ModalController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.bodaService.getBodas().then(data => this.bodas = data);
  }

  async deleteDialog(nombre: string, id: number) {

    const alert = await this.alertController.create({
      header: 'Borrar boda',
      message: '¿Estás seguro que quiere borrar la boda <strong>' + nombre + '</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.bodaService.deleteBoda(id).then(
              () => this.bodaService.getBodas().then(
                data => this.bodas = data)
            );
          }
        }
      ]
    });

    await alert.present();
  }
  editBoda(id: number) {
    this.navController.navigateForward('/edit/' + id)
  }

  async mostrarInfo(id: number) {
    const modal = await this.modalController.create({
      component: DetalleBodaPage,
      componentProps: { id: id }
    });
    return await modal.present();
  }
}
