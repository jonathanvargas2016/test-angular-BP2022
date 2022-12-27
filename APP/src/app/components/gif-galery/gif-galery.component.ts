import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGif } from '../../../../src/app/interfaces/igif';
import { GifsService } from '../../../../src/app/services/gifs.service';

@Component({
  selector: 'app-gif-galery',
  templateUrl: './gif-galery.component.html',
  styleUrls: ['./gif-galery.component.css'],
})
export class GifGaleryComponent implements OnInit {
  regex: string = '(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)';
  myForm: FormGroup = this.fb.group({
    gif: [, [Validators.required, Validators.pattern(this.regex)]],
  });

  gifsList: IGif[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly gifService: GifsService
  ) {}

  ngOnInit(): void {
    this.gifService.getGifs().subscribe((data: any) => {
      console.log(data);
      this.gifsList = [...this.gifsList, ...data];
    });
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      console.log('error en el formulario');
      return;
    }
    const gifAux: IGif = {
      url: this.myForm.value.gif,
      author_id: 2004,
    };

    this.gifService.createGif(gifAux).subscribe(
      (data: any) => {
        this.gifsList = [...this.gifsList, data];
        this.myForm.reset();
      },
      (error) => {
        alert('No se pudo agregar el GIF');
      }
    );
  }

  deleteGif(gif: IGif) {
    this.gifService.deleteGif(gif).subscribe(
      (data: any) => {
        console.log(data);
        this.gifsList = this.gifsList.filter((gif) => gif.id !== data.id);
      },
      (error) => {
        alert('No se pudo eliminar el GIF');
      }
    );
  }

  campoEsValido(campo: string) {
    return (
      this.myForm.controls[campo].errors &&
      this.myForm.controls[campo].touched 
    );
  }
}
