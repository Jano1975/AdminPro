import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styles: []
})
export class GraficosComponent implements OnInit {
@Input() Data: number[] = new Input();
@Input() Labels: string[] = new Input();
@Input() Type: string = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
