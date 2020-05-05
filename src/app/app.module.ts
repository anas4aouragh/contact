import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


var firebaseConfig = {
    apiKey: "AIzaSyA6peYHi4UGJuAtiukoy7vbdVnhX95jH-U",
    authDomain: "aouragh.firebaseapp.com",
    databaseURL: "https://aouragh.firebaseio.com",
    projectId: "aouragh",
    storageBucket: "aouragh.appspot.com",
    messagingSenderId: "915665963268",
    appId: "1:915665963268:web:2302ef56761f909e352851",
    measurementId: "G-55WVH5LVL8"
};

initializeApp(firebaseConfig);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
