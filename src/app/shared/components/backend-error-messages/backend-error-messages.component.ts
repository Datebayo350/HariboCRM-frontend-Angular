import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule
  ],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.css'
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors:BackendErrorsInterface = {};
  errorMessages:string[] = [];

  ngOnInit() {
    console.log("backend errors =>",this.backendErrors);
    this.errorMessages = Object.keys(this.backendErrors).map( (name:string) => {
      const messages = this.backendErrors[name];

      return `${name} ${messages}`
    })
  };
}
