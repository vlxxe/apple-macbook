//////////////////////// Открытие main-nav ////////////////////////

var navMain = document.querySelector('.main-nav-wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

/* var navMainHeight = navMain.scrollHeight; */
var pageHeaderBasket = document.querySelector('.page-header__basket');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    pageHeaderBasket.style.cssText = "visibility: hidden;";
    pageHeader.style.cssText="background-color: #000000";
    /* navMain.style.setProperty('height', '100vh'); */

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    pageHeaderBasket.style.cssText = "visibility: initial;";
    pageHeader.style.cssText="background-color: rgba(45,45,45,0.98)";
    /* navMain.style.setProperty('height', '0'); */
  }
});

//////////////////////// Открытие top-panel ////////////////////////

var topMenu = document.querySelector('.top-panel__menu-list');
var topMenuToggle = document.querySelector('.top-panel__menu-toggle');
var topPanel = document.querySelector('.top-panel');
var topPanelWrapper = document.querySelector('.top-panel__wrapper');

/* var topMenuHeight = topMenu.scrollHeight; */

topMenu.classList.remove('panel-menu--nojs');
topMenuToggle.addEventListener('click', function () {
  if (topMenu.classList.contains('panel-menu--closed')) {
    topMenu.classList.remove('panel-menu--closed');
    topMenu.classList.add('panel-menu--opened');

    topPanel.style.cssText="background-color: #222222";
    topPanelWrapper.style.cssText = "border-bottom: none";
    /* topMenu.style.setProperty('height', '30vh'); */

  } else {
    topMenu.classList.add('panel-menu--closed');
    topMenu.classList.remove('panel-menu--opened');

    topPanel.style.cssText="background-color: transparent";
    topPanelWrapper.style.cssText = "border-bottom: 1px solid rgba(45, 45, 45, 0.98)";
    /* topMenu.style.setProperty('height', '0'); */
  }
});

////////////////////////