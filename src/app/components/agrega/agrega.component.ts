import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/con.service';

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.css'],
})
export class AgregaComponent implements OnInit {
  item: any = {
    name: '',
  };
  constructor(private con: ConService) {}

  ngOnInit(): void {}

  agregar(input: HTMLInputElement) {
    if (input.value === '') {
      input.focus();  
      return;
    }
    this.con.addItem(this.item);
    input.value = '';
    input.focus();
  }
}
