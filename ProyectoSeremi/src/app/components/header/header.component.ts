import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {
  @Input() title:string=""
  constructor(private router: Router) {}

  goToPrincipal() {
    this.router.navigate(['/principal']);
  }
  
  goToPerfil() {
    this.router.navigate(['/ver-perfil']);
  }
  ngOnInit() {}

}
