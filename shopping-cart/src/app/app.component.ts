import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state, group, query } from '@angular/animations';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation',[
      // transition('1=>2', [
      //   style({height: '!'}),
      //   query(':enter', style({transform: 'translateX(100%)'})),
      //   query(':enter, :leave', style({position: 'absolute', left: 0, right:0})),
      //   group([
      //     query(':leave', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(-100%)'}))]),
      //     query(':enter', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(0%)'}))])
      //   ])
      // ]),
      // transition('2=>1', [
      //   style({height: '!'}),
      //   query(':enter', style({transform: 'translateX(-100%)'})),
      //   query(':enter, :leave', style({position: 'absolute', left: 0, right:0})),
      //   group([
      //     query(':leave', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(100%)'}))]),
      //     query(':enter', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({transform: 'translateX(0%)'}))])
      //   ])
      // ])
      state('1',style({
        opacity:1
      })),
      
      state('2',style({
        opacity:1
      })),
      transition('1=>2',[
        animate('1s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
          style({ offset: 0,
            opacity: 0,
            transform: 'translateX(200%)'
          }),
          style({ offset: .6,
            opacity: 1,
            transform: 'translateX(-25px)'
          }),
          style({ offset: .75,
            opacity: 1,
            transform: 'translateX(10px)'
          }),
          style({ offset: .9,
            opacity: 1,
            transform: 'translateX(-5px)'
          }),
          style({ 
            offset: 1,
            opacity: 1,
            transform: 'translateX(0px)'
          })
        ]))
      ]),
      transition('2=>1',[
        animate('1s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
          style({ offset: 0,
            opacity: 0,
            transform: 'translateX(-200%)'
          }),
          style({ offset: .6,
            opacity: 1,
            transform: 'translateX(25px)'
          }),
          style({ offset: .75,
            opacity: 1,
            transform: 'translateX(-10px)'
          }),
          style({ offset: .9,
            opacity: 1,
            transform: 'translateX(5px)'
          }),
          style({ 
            offset: 1,
            opacity: 1,
            transform: 'translateX(0px)'
          })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'shopping-cart';

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
