import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGif } from 'src/app/interfaces/igif';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent implements OnInit {


  @Input() gifs: IGif[] = [];
  @Output() onDeleteGif = new EventEmitter<IGif>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteGif(gif: IGif){
    console.log(gif)
    this.onDeleteGif.emit(gif)
  }

}
