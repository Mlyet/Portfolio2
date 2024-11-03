import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageToolsComponent } from './langage-tools.component';

describe('LangageToolsComponent', () => {
  let component: LangageToolsComponent;
  let fixture: ComponentFixture<LangageToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangageToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
