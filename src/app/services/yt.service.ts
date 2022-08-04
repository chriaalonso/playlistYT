import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiKey = 'AIzaSyDg7pvL-rIaH26_WdITwHhXJ8WZRcc3Aks';

  constructor(private http: HttpClient) { }


  getPlaylistForChannel(channel) {
    return this.http.get(
      'https://www.googleapis.com/youtube/v3/playlists?key=' +
      this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
      .pipe(map(res => ['items'] )
    );
  }

  getListVideos(listId) {
    return this.http.get(
      'https://www.googleapis.com/youtube/v3/playlistItems?key=' +
      this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
      .pipe(map(res => ['items'] )
    );
  }
}
