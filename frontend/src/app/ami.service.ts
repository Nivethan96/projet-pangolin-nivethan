import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ami } from './ami.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmiService {

  constructor(private http: HttpClient) { }

  private uri: string = "http://localhost/4000";

  addAmi(ami: Ami): Observable<Ami>{
    return this.http.post<Ami>(`${this.uri}/amis/addami`,ami)   
  }

  deleteAmi(aminame: String){
    return this.http.delete(`${this.uri}/amis/deletami`)   
  }
}
