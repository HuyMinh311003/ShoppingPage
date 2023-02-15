import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardCartComponent } from './item-card-cart.component';

describe('ItemCardCartComponent', () => {
  let component: ItemCardCartComponent;
  let fixture: ComponentFixture<ItemCardCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
