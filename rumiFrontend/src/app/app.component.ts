import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public authService: AuthService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  // ========== Toastr Messages =======================================
  showSuccess(msg) {
    this.toastr.info(msg, 'Success!');
  }
  
  onLogoutClick(){
    this.showSuccess('You have logged out!');
    this.authService.logout();
  }

}
