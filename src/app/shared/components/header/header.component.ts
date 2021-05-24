import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import 'firebase/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() =>{
      window.dispatchEvent(new Event('resize'))
    },1000)
  }

  login(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    console.log('sign out')
    this.afAuth.signOut();
  }
}
