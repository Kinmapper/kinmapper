import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinmapComponent } from './kinmap.component';

describe('KinmapComponent', () => {
  let component: KinmapComponent;
  let fixture: ComponentFixture<KinmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KinmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
