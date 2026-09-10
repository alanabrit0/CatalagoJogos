import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {
  @Input() produtos: any[] = [];
}