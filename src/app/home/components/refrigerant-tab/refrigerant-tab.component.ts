import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Refrigerant } from '../../types/refrigerant.type';
import { RefrigerantService } from '../../services/refrigerant/refrigerant.service';
import { RefrigerantStoreItem } from '../../services/refrigerant/refrigerant-store-item';

@Component({
  selector: 'app-refrigerant-tab',
  templateUrl: './refrigerant-tab.component.html',
  styleUrls: ['./refrigerant-tab.component.scss'],
  providers: [RefrigerantStoreItem, RefrigerantService]
})
export class RefrigerantTabComponent implements OnInit {
  refrigerants: Refrigerant[] = [];
  refrigerantForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private refrigerantService: RefrigerantService,
    public store: RefrigerantStoreItem
  ) {}

  ngOnInit(): void {
    this.refrigerantForm = this.fb.group({
      name: ['', Validators.required],
      ptFactor: [1.5, [Validators.required, Validators.min(0)]],
      ptOffset: [20, [Validators.required]]
    });

    this.store.loadRefrigerants();
    this.store.refrigerants$.subscribe(data => {
      this.refrigerants = data;      
    });
  }

  onSubmit(): void {
    if (this.refrigerantForm.invalid) return;

    this.refrigerantService.createRefrigerant(this.refrigerantForm.value).subscribe(() => {
      this.refrigerantForm.reset({ ptFactor: 1.5, ptOffset: 20 });
      this.store.loadRefrigerants();
    });
  }

  get f() {
    return this.refrigerantForm.controls;
  }
}
