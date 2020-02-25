import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreSongListPage } from './genre-song-list.page';

describe('GenreSongListPage', () => {
  let component: GenreSongListPage;
  let fixture: ComponentFixture<GenreSongListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreSongListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreSongListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
