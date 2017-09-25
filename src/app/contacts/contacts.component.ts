import {Component, OnInit, HostListener, Renderer2} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('toolbarChange', [
      state('smaller', style({
        height: '*'
      })),
      state('larger', style({
        height: '60%'
      })),
      transition('smaller => larger', [animate('500ms ease-in')]),
      transition('larger => smaller', [animate('500ms ease-in')])
    ]),
    trigger('toolbarTitle', [
      state('smaller', style({
        bottom: '*',
        left: '40px',
        transform: '*'
      })),
      state('larger', style({
        bottom: '20px',
        left: '60px',
        transform: 'scale(2, 3)'
      })),
      transition('smaller => larger', [animate('500ms ease-in')]),
      transition('larger => smaller', [animate('500ms ease-in')])
    ]),
    trigger('toolbarImage', [
      state('smaller', style({
        opacity: '0'
      })),
      state('larger', style({
        opacity: '1'
      })),
      transition('smaller => larger', [animate('500ms ease-in')]),
      transition('larger => smaller', [animate('500ms ease-in')])
    ]),
    trigger('contentStart', [
      state('smaller', style({
        top: '*'
      })),
      state('larger', style({
        top: '62%'
      })),
      transition('smaller => larger', [animate('500ms ease-in')]),
      transition('larger => smaller', [animate('500ms ease-in')])
    ]),
    trigger('toolbarFab', [
      state('smaller', style({
        opacity: '0',
        transform: 'translate(100%,0)'
      })),
      state('larger', style({
        opacity: '1',
        transform: '*'
      })),
      transition('smaller => larger', [animate('500ms ease-in')]),
      transition('larger => smaller', [animate('500ms ease-in')]),
    ])
  ]
})
export class ContactsComponent implements OnInit {
  toolbarState: string;
  cpprojects = [
    {name: 'TopCoder Problems', description: 'Solved problems from TopCoder'},
    {name: 'GeeksForGeeks Problems', description: 'Solved problems from GeeksForGeeks'}
  ];
  wdprojects = [
    {name: 'Socially2', description: 'A party invitation app using Angular and Meteor'},
    {name: '2WayRush', description: 'A simple game using ionic cordova'},
    {name: 'Collab', description: 'A chatting ionic app with whiteboard sharing features'}
  ];
  constructor(private renderer: Renderer2, private snackbar: MdSnackBar) {
    this.toolbarState = 'larger';
  }

  ngOnInit() {
  }

  openSnackBar(): void {
    this.snackbar.open('Stars can\'t shine without Darkness', 'Agreed', { duration: 3000, });
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerHeight < 300) {
      this.toolbarState = 'smaller';
    } else {
      this.toolbarState = 'larger';
    }
  };

  @HostListener('window:scroll', [])
  onScroll() {
    const pos = document.documentElement.scrollTop;
    if (pos > 200) {
      this.toolbarState = 'smaller';
    } else {
      this.toolbarState = 'larger';
    }
  };

}
