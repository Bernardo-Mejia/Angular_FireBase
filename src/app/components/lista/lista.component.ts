import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  items: any;
  // * Edit
  itemEditar: any = { name: '' };

  constructor(private con: ConService) {
    this.con.retornaItems().subscribe((items) => (this.items = items));
  }

  ngOnInit(): void {}

  eliminar(id: string) {
    // console.log(id);
    this.con.removeItem(id);
  }

  editar(item: any) {
    console.log(item);
    this.itemEditar = item;
  }

  editarForm() {
    this.con.editItem(this.itemEditar);
  }
}
