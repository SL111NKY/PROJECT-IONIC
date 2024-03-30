import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputsPage } from './inputs.page';

describe('InputsPage', () => {
  let component: InputsPage;
  let fixture: ComponentFixture<InputsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
