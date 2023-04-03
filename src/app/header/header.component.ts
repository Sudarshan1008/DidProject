import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{ 
    constructor () { }
    ngOnInit () {
    }
    public  isVisible: boolean = false;
    header_variable=false;
    @HostListener("document:scroll")
    scrollfuncion(){
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        this.header_variable=true;
      }
      else{
        this.header_variable=false;
      }
    }
    hideList(){
      this.isVisible = ! this.isVisible;
    
    }

    //   hideSidebar() {
    //    document.getElementById('openSideMenu').checked = false;
    //  }
    
    //  var sideIconToggle = document.getElementById('sidebarContainer');
    
    //  document.addEventListener('click', function(event) {
    //    if (!sidebarContainer.contains(event.target))
    //     hideSidebar();
    //  });
    
}
