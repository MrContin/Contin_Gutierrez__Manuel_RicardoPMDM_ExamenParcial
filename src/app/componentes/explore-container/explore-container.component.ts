import { Component, OnInit, Input } from '@angular/core';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {}
 
 
  
    handlerMessage = '';
    roleMessage = '';
  
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  }

