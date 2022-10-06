import { Component, OnInit } from '@angular/core';
import { ContactData } from './ContactData';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  register: ContactData = {
    name:"",
    email:"",
    question:""
  }

  constructor() { }

  submit(){}

  ngOnInit(): void {
  }

}
