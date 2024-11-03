import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangagesToolsComponent } from './langages-tools.component';

describe('LangagesToolsComponent', () => {
  let component: LangagesToolsComponent;
  let fixture: ComponentFixture<LangagesToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangagesToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangagesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
