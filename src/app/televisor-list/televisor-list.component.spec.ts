import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisorListComponent } from './televisor-list.component';

describe('TelevisorListComponent', () => {
  let component: TelevisorListComponent;
  let fixture: ComponentFixture<TelevisorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
