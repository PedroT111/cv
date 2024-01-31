import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicafeappPageComponent } from './micafeapp-page.component';

describe('MicafeappPageComponent', () => {
  let component: MicafeappPageComponent;
  let fixture: ComponentFixture<MicafeappPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicafeappPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicafeappPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
