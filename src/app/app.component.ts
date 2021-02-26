import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public min: number = 1;
  public max = 124;
  public rowsToDisplay: Row[] = [];

  private rows: Row[] = [];

  constructor() {
    for (let index = 0; index < 99999; index++) {
      this.rows.push(new Row(index, `row number ${index}`, Math.round(Math.random() * (99999 - 1) + 1)))
    }
  }

  public getRowsWithValue(min: number, max: number): void {
    this.rowsToDisplay = this.rows.filter(row => row.value >= min && row.value <= max);
    console.log(`rows filtered, results ${this.rowsToDisplay.length}`);
  }

  public onSubmit(value: any): void {
    this.min = value?.min;
    this.max = value?.max;
    this.getRowsWithValue(this.min, this.max);
  }
}

export class Row {
  constructor(id: number, text: string, value: number) {
    this.id = id
    this.text = text
    this.value = value
  }

  id: number;
  text: string;
  value: number;
}
