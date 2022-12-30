import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-temporary',
  templateUrl: './temporary.component.html',
  styleUrls: ['./temporary.component.css'],
})
export class TemporaryComponent implements OnInit {
  visible = true;
  logs = ['log1', 'log2', 'log3'];
  text = '';
  innerText = '';
  stringInterpolation =
    'just feed the {{ }} anything that returns a string even a function';
  textOneWay = '';
  textEvent = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  toggleVis() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
  updateText(event: Event) {
    this.textEvent = (<HTMLInputElement>event.target).value;
  }
  updateInnerText(event: Event) {
    this.innerText = (<HTMLInputElement>event.target).value;
  }
  tempForm = this.formBuilder.group({
    formText: '',
  });
  formText = '';
  updateTempForm() {
    this.formText = this.tempForm.value.formText!;
  }
}
