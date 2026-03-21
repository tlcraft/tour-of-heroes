import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
