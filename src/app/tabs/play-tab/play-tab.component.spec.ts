import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayTabComponent } from './play-tab.component';

describe('PlayTabComponent', () => {
  let component: PlayTabComponent;
  let fixture: ComponentFixture<PlayTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
