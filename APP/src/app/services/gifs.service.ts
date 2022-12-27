import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGif } from '../interfaces/igif';
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  autor_id: number = 2004;
  urlBase: string =
    'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws';

  constructor(private readonly http: HttpClient) {}

  getGifs() {
    let params = new HttpParams();
    params = params.append('author_id', this.autor_id);

    return this.http.get(this.urlBase, { params: params });
  }

  createGif(gif: IGif) {
    return this.http.post(this.urlBase, gif);
  }

  deleteGif(gif: IGif) {
    return this.http.delete(this.urlBase, { body: gif });
  }
}
