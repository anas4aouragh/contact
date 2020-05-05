import { Component } from '@angular/core';
import * as firebase from 'firebase'
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface User {
    nom: string;
    prenom: string;
    email: string;
    tel: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    database = firebase.database();
    users: User[] = [];
    userForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm = () => {
        this.userForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'nom': new FormControl('', [Validators.required]),
            'prenom': new FormControl('', [Validators.required]),
            'tel': new FormControl('', [Validators.required])
        });
    }

    createUser() {
        debugger;
        if (this.userForm.valid) {
            this.database.ref('contact/').set({
                task: this.userForm.value
            }).then(
                res => {
                    debugger;
                    this.users.push(this.userForm.value);
                    this.initializeForm();
                }
            )

        }
    }

    getAllUsers() {
        // this.database.ref
    }

    updateTask(index: number) {
        // this.currenUser = this.users[index];
    }

    deleteUser(index: number) {
        this.users.splice(index, 1);
    }
}
