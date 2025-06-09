import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../../services/device/device.service';


@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  deviceId!: string;
  device: any;
  years: number[] = [2021, 2022, 2023, 2024, 2025];
  selectedYear = new Date().getFullYear();
  chartData: any;
  chartOptions: any;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('id')!;
    console.log('deviceId', this.deviceId  );
    
    this.loadDevice();
    this.loadTelemetry(this.selectedYear);
  }

  loadDevice() {
    this.deviceService.getDeviceById(this.deviceId).subscribe(res => {
      this.device = res.data;
    });
  }

  loadTelemetry(year: number) {
    this.deviceService.getTelemetryByYear(this.deviceId, year).subscribe(res => {
      console.log('res' ,res);
      
      const telemetry = res.data;

      this.chartData = {
        labels: telemetry.map((t: any) => new Date(t.createdAt).toLocaleDateString()),
        datasets: [
          {
            label: 'Lowpressure',
            data: telemetry.map((t: any) => t.lowPressure),
            borderColor: '#42A5F5',
            fill: false
          },
          {
            label: 'HightPressure',
            data: telemetry.map((t: any) => t.highPressure),
            borderColor: '#66BB6A',
            fill: false
          }
        ]
      };

      this.chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: `Telemetry Data for ${year}`
          }
        }
      };
    });
  }
}
