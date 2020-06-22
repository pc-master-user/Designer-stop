import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

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
}
