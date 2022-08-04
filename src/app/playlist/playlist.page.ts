import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { YtService } from '../services/yt.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  videos: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    private plt: Platform,
    private playerYoutube: YoutubeVideoPlayer,
    public navParams: NavParams,
    private ytService: YtService
  ) {
    const listId = this.navParams.get('id');
    this.videos = this.ytService.getListVideos(listId);
    this.videos.subscribe(data => { console.log('video data: ', data); } );
  }

  openVideo(video) {
    if(this.plt.is('cordova')) {
      this.playerYoutube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }

  ngOnInit() {
  }

}
