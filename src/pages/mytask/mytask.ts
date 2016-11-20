import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from '../../models/task';

@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html'
})

export class MytaskPage {
  tasks: Task[] ;

  constructor(public navCtrl: NavController) {
    this.tasks = [
      {
        name: 'Task 1',
        high: 10,
        medium: 12,
        low:6
      },
      {
        name: 'Task 2',
        high: 12,
        medium: 92,
        low:0
      }
  ];
  }

  ionViewDidLoad() {
    console.log('Hello MytaskPage Page');
  }

}
