import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl = environment.apiServerUrl;

  constructor(private http : HttpClient) { }

public getPersona(): Observable<Persona>{
  return this.http.get<Persona>(`${this.apiServerUrl}/persona/all`);
}
public updatePersona(persona: Persona): Observable<Persona> {
  return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`, persona);
}

public addPersona(persona: Persona): Observable<Persona> {
  return this.http.post<Persona>(`${this.apiServerUrl}/persona/add`, persona);
}

public deletePersona(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/persona/delete/${id}`);
}
}


