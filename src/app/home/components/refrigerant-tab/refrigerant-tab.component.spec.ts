import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigerantTabComponent } from './refrigerant-tab.component';

describe('RefrigerantTabComponent', () => {
  let component: RefrigerantTabComponent;
  let fixture: ComponentFixture<RefrigerantTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefrigerantTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefrigerantTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
