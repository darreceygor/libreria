import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiloniaNewsComponent } from './babilonia-news.component';

describe('BabiloniaNewsComponent', () => {
  let component: BabiloniaNewsComponent;
  let fixture: ComponentFixture<BabiloniaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabiloniaNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabiloniaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
