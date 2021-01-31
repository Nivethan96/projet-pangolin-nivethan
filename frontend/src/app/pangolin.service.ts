import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pangolin } from './pangolin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  constructor(private http: HttpClient) { }

  private uri: string = "http://localhost/4000";

  addPangolin(pangolin: Pangolin): Observable<Pangolin>{
    return this.http.post<Pangolin>(`${this.uri}/pangolins/showallpangolins`,pangolin)   
  }

  editPangolin(pangolin: Pangolin): Observable<Pangolin>{
    return this.http.put<Pangolin>(`${this.uri}/pangolins/showallpangolins`,pangolin)   
  }
}
