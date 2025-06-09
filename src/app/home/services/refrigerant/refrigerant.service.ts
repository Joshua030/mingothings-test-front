// home/services/refrigerant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Refrigerant } from '../../types/refrigerant.type';



@Injectable()
export class RefrigerantService {
  constructor(private http: HttpClient) {}

  getAllRefrigerants(): Observable<Refrigerant[]> {
    return this.http.get<Refrigerant[]>('http://localhost:8000/api/refrigerants');
  }
}
