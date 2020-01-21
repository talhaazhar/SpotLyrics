import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayTabPage } from './play-tab.page';

describe('PlayTabPage', () => {
  let component: PlayTabPage;
  let fixture: ComponentFixture<PlayTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
