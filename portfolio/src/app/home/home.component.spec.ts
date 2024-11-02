import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCloseComponent } from './home.component';

describe('HomeCloseComponent', () => {
  let component: HomeCloseComponent;
  let fixture: ComponentFixture<HomeCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
