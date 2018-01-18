import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDhM6qdiQkHr6As7PmqgL229UWLtoH_2j2w5tYEYNqHH8hEg6B9Zl1CoyUPqRf2kXerEoN6F8-WwhFokqw';

  constructor(public http: HttpClient) {
    console.log('Servicio de spotify listo')
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtists(termino: string) {
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
               .map((response: any) => {
                 this.artists = response.artists.items
                 return this.artists;
               });
  }

  getArtist(id: string) {
    let url = `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getTop(id: string) {

  }

}
