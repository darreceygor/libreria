import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiloniaAboutComponent } from './babilonia-about.component';

describe('BabiloniaAboutComponent', () => {
  let component: BabiloniaAboutComponent;
  let fixture: ComponentFixture<BabiloniaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabiloniaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabiloniaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
