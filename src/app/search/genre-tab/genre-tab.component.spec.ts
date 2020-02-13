import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreTabComponent } from './genre-tab.component';

describe('GenreTabComponent', () => {
	let component: GenreTabComponent;
	let fixture: ComponentFixture<GenreTabComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GenreTabComponent ],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(GenreTabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
