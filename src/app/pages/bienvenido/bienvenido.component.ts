import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {
  userData!: any;
  constructor(private github: GithubService) {}
  ngOnInit(): void {
    this.github.todos().subscribe((data) => {
      this.userData = data;
    });
  }
}
