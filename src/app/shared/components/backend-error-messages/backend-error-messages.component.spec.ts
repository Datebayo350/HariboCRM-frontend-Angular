import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendErrorMessagesComponent } from './backend-error-messages.component';

describe('BackendErrorMessagesComponent', () => {
  let component: BackendErrorMessagesComponent;
  let fixture: ComponentFixture<BackendErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendErrorMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
