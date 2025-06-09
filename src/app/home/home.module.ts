import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { DeviceTabComponent } from './components/device-tab/device-tab.component';
import { RefrigerantTabComponent } from './components/refrigerant-tab/refrigerant-tab.component';
import { DropdownModule } from 'primeng/dropdown';
import { RefrigerantService } from './services/refrigerant/refrigerant.service';
import { RefrigerantStoreItem } from './services/refrigerant/refrigerant-store-item';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';

@NgModule({
  declarations: [HomeComponent, DeviceTabComponent, RefrigerantTabComponent, DeviceDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    TabViewModule,
    DropdownModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
     ButtonModule
  ],
  providers: [RefrigerantService, RefrigerantStoreItem],
})
export class HomeModule {}
