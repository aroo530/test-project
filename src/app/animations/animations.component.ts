import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    // trigger('wildState', [
    //   state(
    //     'normal',
    //     style({
    //       'background-color': 'red',
    //       transform: 'translateX(0)',
    //       scale: 1,
    //     })
    //   ),

    //   state(
    //     'highlighted',
    //     style({
    //       'background-color': 'blue',
    //       transform: 'translateX(100px)',
    //     })
    //   ),
    //   state(
    //     'shrunken',
    //     style({
    //       'background-color': 'blue',
    //       transform: 'translateX(100px)',
    //       scale: 0.5,
    //     })
    //   ),
    //   transition('normal => highlighted', animate(300)),
    //   transition('highlighted => normal', animate(800)),
    //   transition('shrunken <=> *', [
    //     style({
    //       'background-color': 'orange',
    //     }),
    //     animate(
    //       1000,
    //       style({
    //         borderRadius: '50px',
    //       })
    //     ),
    //     animate(500),
    //   ]),
    // ]),
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          backgroundColor: 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'rosybrown',
          transform: 'translate(200px,200px)',
          rotate: '270deg',
        })
      ),
      transition('normal => highlighted', animate(400)),
      transition('highlighted => normal', animate(400)),
      transition('normal <=> highlighted', animate(400)),
    ]),
    trigger('list1', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(400)]),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  constructor() {}
  flag = false;
  state = 'normal';
  changeState() {
    this.flag = !this.flag;
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }
  changeShrink() {
    this.state =
      this.state === 'normal'
        ? (this.state = 'shrunken')
        : (this.state = this.state);
  }
  ngOnInit(): void {}
}
