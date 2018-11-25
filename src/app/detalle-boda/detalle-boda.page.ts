import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, NavController } from '@ionic/angular';
import { BodaService } from '../services/boda.service';

@Component({
  selector: 'app-detalle-boda',
  templateUrl: './detalle-boda.page.html',
  styleUrls: ['./detalle-boda.page.scss'],
})
export class DetalleBodaPage implements OnInit {

  public boda;
  public id;

  constructor(private modalController: ModalController,
    private bodaService: BodaService,
    private navParams: NavParams,
    private navController: NavController,
    private alertController: AlertController) {
    
      this.id = this.navParams.get('id');
      console.log(this.id);
  }

  ngOnInit() {
    this.boda = this.bodaService.getBodaById(this.id);
    console.log(this.boda);
  }

  close() {
    this.modalController.dismiss();
  }

}
