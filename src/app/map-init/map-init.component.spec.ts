import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInitComponent } from './map-init.component';

describe('MapInitComponent', () => {
  let component: MapInitComponent;
  let fixture: ComponentFixture<MapInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
