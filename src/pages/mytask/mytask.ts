import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Task } from '../../models/task';

@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html'
})

export class MytaskPage {
  tasks: Task[] ;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
    this.tasks = [
      {
        name: 'Task 1',
        high: 10,
        medium: 12,
        low:6,
        desc: 'My first task'
      },
      {
        name: 'Task 2',
        high: 12,
        medium: 92,
        low:0,
        desc: 'My second task'
      }
  ];
  }

  ionViewDidLoad() {
    console.log('Hello MytaskPage Page');
  }

  goToApp(name: string) {
    let alert = this.alertCtrl.create({
      title: 'Navigate to App',
      subTitle: 'Do navigation to app '+name,
      buttons: ['OK']
    });
    alert.present();
  }

}
