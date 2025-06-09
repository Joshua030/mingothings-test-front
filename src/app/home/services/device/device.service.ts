// home/services/device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device, Devices } from '../../types/device.type';

@Injectable()
export class DeviceService {
  constructor(private http: HttpClient) {}

  getAllDevices(): Observable<Devices> {
    return this.http.get<Devices>('http://localhost:8000/api/things');
  }

  createDevice(data: Partial<Device>): Observable<any> {
    return this.http.post('http://localhost:8000/api/things', data);
  }

  getDeviceById(id: string) {
  return this.http.get<any>(`http://localhost:8000/api/things/${id}`);
}

getTelemetryByYear(id: string, year: number) {
  return this.http.get<any>(`http://localhost:8000/api/things/${id}/${year}`);
}
}
