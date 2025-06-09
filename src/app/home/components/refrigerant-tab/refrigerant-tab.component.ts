import { Component, OnInit } from '@angular/core';
import { RefrigerantStoreItem } from '../../services/refrigerant/refrigerant-store-item';
import { Refrigerant } from '../../types/refrigerant.type';


@Component({
  selector: 'app-refrigerant-tab',
  templateUrl: './refrigerant-tab.component.html',
  styleUrls: ['./refrigerant-tab.component.scss'],
  providers: [RefrigerantStoreItem]
})
export class RefrigerantTabComponent implements OnInit {
  refrigerants: Refrigerant[] = [];
  years = [2021, 2022, 2023, 2024, 2025];
  selectedYear: number = new Date().getFullYear();

  constructor(public store: RefrigerantStoreItem) {}

  ngOnInit(): void {
    this.store.loadRefrigerants();
    this.store.refrigerants$.subscribe(data => {
      this.refrigerants = data;
    });
  }
}
