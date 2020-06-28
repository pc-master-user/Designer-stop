import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'
import { RoutingConstants } from '../shared/routing-constants';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  whatsappIcon = faWhatsapp;
  shoppingCartIcon = faShoppingBasket;
  title = 'Designer Stop';

  constructor(
    private router: Router
  ){}

  public goToMensPage(event:Event):void{
    event.preventDefault();

    this.router.navigate([RoutingConstants.HOME_PAGE_MEN]);
  }

  ngOnInit(): void {
  }

}
