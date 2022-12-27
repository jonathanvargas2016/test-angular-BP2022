import { Component, Input, OnInit } from '@angular/core';
import { IGif } from 'src/app/interfaces/igif';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent implements OnInit {


  @Input() gifs: IGif[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
