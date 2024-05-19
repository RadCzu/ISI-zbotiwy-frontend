// src/app/hello.component.ts

import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass'],
})
export class HelloComponent implements OnInit {

  helloMessage: string = "";

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.sayHello();
  }

  sayHello(): void {
    this.helloService.sayHello()
      .subscribe(message => {
        this.helloMessage = message;
      });
  }
}