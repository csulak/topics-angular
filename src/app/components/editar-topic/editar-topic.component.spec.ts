import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTopicComponent } from './editar-topic.component';

describe('EditarTopicComponent', () => {
  let component: EditarTopicComponent;
  let fixture: ComponentFixture<EditarTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
