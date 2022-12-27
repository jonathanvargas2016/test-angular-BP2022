import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GifsService } from './gifs.service';

describe('GifsService', () => {
  let service: GifsService;
  let httpTestingController: HttpTestingController;
  const urlBase: string =
    'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GifsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('Should create a new gif', () => {
    const mockGif = {
      id: 608,
      url: 'www.gif.com',
      author_id: 2004,
    };
    service.createGif(mockGif).subscribe((data) => {
      expect(data).toEqual(mockGif);
    });

    const urlApi = `${urlBase}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('POST');

    req.flush(mockGif);
  });

  test('should get gifs', () => {
    const mockGif = [
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


    service.getGifs().subscribe((data) => {
      expect(data).toEqual(mockGif);
    });

    const urlApi = `${urlBase}?author_id=2004`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(mockGif);

  });

  test('should delete a gif', () => {

    const mockGif = {
      id: 608,
      url: 'www.gif.com',
      author_id: 2004,
    };
    service.deleteGif(mockGif).subscribe((data) => {
      expect(data).toEqual(mockGif);
    });

    const urlApi = `${urlBase}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('DELETE');

    req.flush(mockGif);


  });
});
