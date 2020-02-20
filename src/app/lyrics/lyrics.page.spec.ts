import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LyricsPage } from './lyrics.page';

describe('LyricsPage', () => {
  let component: LyricsPage;
  let fixture: ComponentFixture<LyricsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LyricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
