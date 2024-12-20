import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'
import { RoutingConstants } from './shared/routing-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  whatsappIcon = faWhatsapp;
  shoppingCartIcon = faShoppingBasket;
  title = 'Designer Stop';

  constructor(
    private router: Router
  ){}
}
