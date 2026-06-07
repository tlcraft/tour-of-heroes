import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
    selector: 'app-messages',
    imports: [],
    templateUrl: './messages.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
