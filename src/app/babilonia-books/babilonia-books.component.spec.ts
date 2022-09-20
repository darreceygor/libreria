import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiloniaBooksComponent } from './babilonia-books.component';

describe('BabiloniaBooksComponent', () => {
  let component: BabiloniaBooksComponent;
  let fixture: ComponentFixture<BabiloniaBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabiloniaBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabiloniaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
