import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DeviceDetailComponent } from "./components/device-detail/device-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'device/:id', component: DeviceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
