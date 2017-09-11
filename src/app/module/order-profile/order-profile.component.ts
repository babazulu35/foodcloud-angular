import { AuthenticationService } from '../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-profile',
  templateUrl: './order-profile.component.html',
  styleUrls: ['./order-profile.component.scss']
})
export class OrderProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  
  ngOnInit() {
    this.authService.getAccessToken();
  }

}
