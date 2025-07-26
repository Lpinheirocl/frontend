import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  appsExternos = [1, 2, 3];
  appsPessoais = [1, 2, 3];
}
