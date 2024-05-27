import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../service/messages.service';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  faTimes = faTimes;

  constructor(public messageService: MessagesService){}

}
