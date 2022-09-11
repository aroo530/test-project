import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporary',
  templateUrl: './temporary.component.html',
  styleUrls: ['./temporary.component.css'],
})
export class TemporaryComponent implements OnInit {
  visible = true;
  text = 'this is a placholder text';
  constructor() {}

  ngOnInit(): void {}
  toggleVis() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
}
