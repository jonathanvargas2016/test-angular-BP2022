import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsListComponent } from './gifs-list.component';

describe('GifsListComponent', () => {
  let component: GifsListComponent;
  let fixture: ComponentFixture<GifsListComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GifsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should show a alert when there are not gifs', () => {
    component.gifs = [];
    fixture.detectChanges();
    const h1Element = compiled.querySelector('h1');
    expect(h1Element?.textContent).toContain('No posee Gifs');
  });

  test('should not show a alert where there are gifs', () => {
    component.gifs = [
      {
        id: 608,
        url: 'www.gif.com',
        author_id: 2004,
      },
      {
        id: 609,
        url: 'www.gif.com',
        author_id: 2004,
      },
      {
        id: 610,
        url: 'www.gif.com',
        author_id: 2004,
      },
    ];
    fixture.detectChanges();
    const h1Element = compiled.querySelector('h1');
    expect(h1Element?.textContent).toBeUndefined();
  });

  test('Should emit a event onDeleteGif when delete a gif', () => {
    const mockGif = {
      id: 608,
      url: 'www.gif.com',
      author_id: 2004,
    };

    component.gifs = [mockGif];

    fixture.detectChanges();

    jest.spyOn(component.onDeleteGif, 'emit');

    const btnDelete = compiled.querySelector('button');
    btnDelete?.dispatchEvent(new Event('click'));
    component.deleteGif(mockGif);
    expect(component.onDeleteGif.emit).toHaveBeenCalledWith(mockGif);
  });
});
