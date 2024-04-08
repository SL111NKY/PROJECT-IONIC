import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class DBService {
  private firebaseConfig = {
    apiKey: "AIzaSyBx7RTg9DGQTIMfbW2FAC4XALlF8VDUvdI",
    authDomain: "zeta-733de.firebaseapp.com",
    databaseURL: "https://zeta-733de-default-rtdb.firebaseio.com",
    projectId: "zeta-733de",
    storageBucket: "zeta-733de.appspot.com",
    messagingSenderId: "1072527732557",
    appId: "1:1072527732557:web:a7bb814bf3ae3ebd8c5104"
  };

// Initialize Firebase
private app = initializeApp(this.firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
public db = getFirestore(this.app);
  constructor() { }
}
