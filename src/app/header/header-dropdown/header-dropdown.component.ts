import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements AfterViewInit{

  constructor() { }

  ngAfterViewInit() {
    const Menu = {
      el: {
        menu: document.getElementsByClassName('menu')[0],
        menuTop:  document.getElementsByClassName('menu-top')[0],
        menuClose:  document.getElementsByClassName('menu-close')[0],
        menuMiddle:  document.getElementsByClassName('menu-middle')[0],
        menuBottom:  document.getElementsByClassName('menu-bottom')[0],
        menuText: document.getElementsByClassName('menu-text')[0],
      },
      init: function() {
        Menu.bindUIactions();
      },
      bindUIactions: function() {
        Menu.el.menu
        .addEventListener('click',   function(event) {
          Menu.activateMenu();
          event.preventDefault();
        });
      },
      activateMenu: function() {
        Menu.el.menuTop.classList.toggle('menu-top-expand');
        Menu.el.menuTop.classList.toggle('expand');
        Menu.el.menuMiddle.classList.toggle('menu-middle-expand');
        Menu.el.menuMiddle.classList.toggle('expand');
        Menu.el.menuBottom.classList.toggle('menu-bottom-expand');
        Menu.el.menuBottom.classList.toggle('expand');
        Menu.el.menuText.classList.toggle('menu-text-expand');
        Menu.el.menuClose.classList.toggle('menu-close-visible');
      }
    };
    document.getElementsByClassName('menu-global')[0].addEventListener('click', function(e) {
      e.stopPropagation();
} );
    Menu.init();
  }
}
