// home/services/refrigerant-store-item.ts
import { Injectable } from '@angular/core';
import { StoreItem } from '../../../shared/storeItem';
import { RefrigerantService} from './refrigerant.service';
import { Observable } from 'rxjs';
import { Refrigerant } from '../../types/refrigerant.type';

@Injectable()
export class RefrigerantStoreItem extends StoreItem<Refrigerant[]> {
  constructor(private refrigerantService: RefrigerantService) {
    super([]);
  }

  loadRefrigerants() {
    this.refrigerantService.getAllRefrigerants().subscribe(refrigerants => {
      this.setValue(refrigerants);
    });
  }

  get refrigerants$(): Observable<Refrigerant[]> {
    return this.Value$;
  }
}
