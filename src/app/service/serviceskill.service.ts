import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modelskill } from '../model/modelskill';

@Injectable({
  providedIn: 'root',
})
export class ServiceskillService {
  //URL: 'http://localhost:8080/skill/';
  URL = environment.URL + 'skill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Modelskill[]> {
    return this.httpClient.get<Modelskill[]>(this.URL + 'lista').pipe(retry(3));
  }

  public detail(id: number): Observable<Modelskill> {
    return this.httpClient.get<Modelskill>(this.URL + `detail/${id}`);
  }

  public save(modelskill: Modelskill): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', modelskill);
  }

  public update(id: number, modelskill: Modelskill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, modelskill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
