import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public authService: AuthService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
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
