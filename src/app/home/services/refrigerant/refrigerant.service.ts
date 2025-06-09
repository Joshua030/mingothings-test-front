// home/services/refrigerant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Refrigerant, Refrigerants } from '../../types/refrigerant.type';



@Injectable()
export class RefrigerantService {
  constructor(private http: HttpClient) {}

  getAllRefrigerants(): Observable<Refrigerants> {
    return this.http.get<Refrigerants>('http://localhost:8000/api/refrigerants');
  }

  createRefrigerant(data: Partial<Refrigerant>) {
  return this.http.post('http://localhost:8000/api/refrigerants', data);
}

}
