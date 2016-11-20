import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Task } from '../../models/task';

declare var LightstreamerClient: any;
declare var Subscription: any;

@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html'
})

export class MytaskPage {
  tasks: Task[] ;
  LSClient: any;
  subscription: any;

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
    this.setupLSConn();
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

  setupLSConn() {
        this.LSClient = new LightstreamerClient("http://localhost:8080", "DEMO");

        this.LSClient.addListener({
          onServerError: (errorCode, errorMessage) => {
            console.log(errorMessage);
          },
          onStatusChange: (status) => {
            console.log(status);
          }
        });
        this.LSClient.connect();
        /*
        For subscription:
        this.subscription = new Subscription("MERGE", "", "");
        this.subscription.setDataAdapter("QUOTE_ADAPTER");
        this.subscription.addListener({
            onItemUpdate: (updateObject) => {
                var itemName = updateObject.getItemName();
                updateObject.forEachChangedField((fieldName, fieldPos, val) => {
                      var itemIndex = this.itemNames.indexOf(itemName);
                      var fieldIndex = this.fieldNames.indexOf(fieldName);
                      console.assert(fieldIndex != -1);
                      console.assert(itemIndex != -1);
                      this.stocks[itemIndex][fieldIndex] = val;
                      this.ref.detectChanges();
                });
            }
        });
        this.LSClient.subscribe(this.subscription);
        */
  }
}
