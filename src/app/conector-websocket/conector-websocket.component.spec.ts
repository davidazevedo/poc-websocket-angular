import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectorWebsocketComponent } from './conector-websocket.component';

describe('ConectorWebsocketComponent', () => {
  let component: ConectorWebsocketComponent;
  let fixture: ComponentFixture<ConectorWebsocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectorWebsocketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectorWebsocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
