// home/services/device-store-item.ts
import { Injectable } from '@angular/core';
import { StoreItem } from '../../../shared/storeItem';
import { Observable } from 'rxjs';
import { Device } from '../../types/device.type';
import { DeviceService } from './device.service';

@Injectable()
export class DeviceStoreItem extends StoreItem<Device[]> {
  constructor(private deviceService: DeviceService) {
    super([]);
  }

  loadDevices(): void {
    this.deviceService.getAllDevices().subscribe(devices => this.setValue(devices.data));
  }

  get devices$(): Observable<Device[]> {
    return this.Value$;
  }
}
