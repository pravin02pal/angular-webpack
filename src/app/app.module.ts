import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAVdtu_Zzqgu7XGjhv7gcutNWznJX_ZDJM",
    authDomain: "eschoolapp-65664.firebaseapp.com",
    databaseURL: "https://eschoolapp-65664.firebaseio.com",
    storageBucket: "eschoolapp-65664.appspot.com",
    messagingSenderId: "382607758653"
  };

@NgModule({
  imports: [ 
      BrowserModule, 
      FormsModule, 
      HttpModule,
      routing,
      AngularFireModule.initializeApp(firebaseConfig)
    ],

  declarations: [ 
      AppComponent 
    ],

  bootstrap: [ 
      AppComponent 
    ]
})

export class AppModule { }