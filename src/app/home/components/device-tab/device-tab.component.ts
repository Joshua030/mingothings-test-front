import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceStoreItem } from '../../services/device/device-store-item';
import { DeviceService } from '../../services/device/device.service';
import { RefrigerantService } from '../../services/refrigerant/refrigerant.service';
import { Refrigerant } from '../../types/refrigerant.type';
import { Device } from '../../types/device.type';
import { RefrigerantStoreItem } from '../../services/refrigerant/refrigerant-store-item';

@Component({
  selector: 'app-device-tab',
  templateUrl: './device-tab.component.html',
  providers: [DeviceStoreItem, DeviceService, RefrigerantService],
})
export class DeviceTabComponent implements OnInit {
  deviceForm!: FormGroup;
  refrigerants: Refrigerant[] = [];
  devices: Device[] = [];

  constructor(
    private fb: FormBuilder,
    private deviceStore: DeviceStoreItem,
    private deviceService: DeviceService,
    private refrigerantService: RefrigerantService,
    public store: RefrigerantStoreItem,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      refrigerantType: [null, Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
    });

    this.deviceStore.loadDevices();
    this.deviceStore.devices$.subscribe((devices) => (this.devices = devices));
    this.store.loadRefrigerants();
     this.store.refrigerants$.subscribe(data => {
      console.log('data', data );
      
      this.refrigerants = data;
    });
  }

  onSubmit(): void {
    if (this.deviceForm.invalid) return;

    const payload = {
      ...this.deviceForm.value,
      refrigerantType: this.deviceForm.value.refrigerantType._id,
    };

    this.deviceService.createDevice(payload).subscribe(() => {
      this.deviceForm.reset({ capacity: 0 });
      this.deviceStore.loadDevices();
    });
  }

  goToDetails(deviceId: string): void {
    this.router.navigate(['/device', deviceId]);
  }
}
