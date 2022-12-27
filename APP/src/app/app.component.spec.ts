import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GifGaleryComponent } from './components/gif-galery/gif-galery.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, GifGaleryComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
