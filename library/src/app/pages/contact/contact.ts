import { Component } from '@angular/core';
import { Accordion } from '../../component/accordion/accordion';

@Component({
  selector: 'app-contact',
  imports: [Accordion],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}