import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Televisor } from '../models/televisor.model';

@Injectable({
  providedIn: 'root'
})

export class TelevisorService {

  private apiUrl = 'http://localhost:8080/api/televisor';

  constructor(
    private http: HttpClient
  ) { }

  getTelevisores(): Observable<Televisor[]> {
    return this.http.get<Televisor[]>(`${this.apiUrl}/list`);
  }

  getTelevisor(idTelevisor: number): Observable<Televisor> {
    return this.http.get<Televisor>(`${this.apiUrl}/${idTelevisor}`);
  }

  saveTelevisor(televisor: Televisor): Observable<Televisor> {
    return this.http.post<Televisor>(`${this.apiUrl}/save`, televisor);
  }

  updateTelevisor(idTelevisor: number, televisor: Televisor): Observable<Televisor> {
    return this.http.put<Televisor>(`${this.apiUrl}/update/${idTelevisor}`, televisor);
  }

  deleteTelevisor(idTelevisor: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idTelevisor}`);
  }
}
