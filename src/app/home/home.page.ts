import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { Observable } from 'rxjs/';

import { YtService } from '../services/yt.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  channelId = 'v4LiRi5wbp9w3JasPd1QUw';
  playlists: Observable<any[]>;

  constructor(public navCtrl: NavController, private ytService: YtService, private alertCtrl: AlertController) {}

  searchPlaylists() {
    this.playlists = this.ytService.getPlaylistForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('data: ', data);
    }, async err => {
      const alert = this.alertCtrl.create({
        header: 'Error',
        message: 'Playlist não encontrada',
        buttons: ['OK']
      });
      (await alert).present();
    });
  }

  openPlaylist(id) {
    this.navCtrl.navigateForward('PlaylistPage', id);
  }

}
