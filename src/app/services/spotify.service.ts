import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log('Servicio de spotify listo')
  }

  getArtists() {
    let url = 'https://api.spotify.com/v1/search?query=Bersuit&type=artist&offset=0&limit=20';
    this.http.get(url)
      .subscribe(response => {
        console.log(response);
      });
  }

}
