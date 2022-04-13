// header

//open mobile menu
let burgerMenu = document.getElementById('hamburgerMenu');
let isMenuOpen = document.getElementById('showMobileMenu');
let mobileMenu = document.querySelector('.mobile-menu');
let body       = document.querySelector('.wrapper');

if ( burgerMenu != null) {
    burgerMenu.onclick = () => {
        if ( !isMenuOpen.checked ) {
            burgerMenu.classList.add('opened');
            mobileMenu.classList.add('show');
            body.classList.add('fix');
    
            isMenuOpen.checked = true;
        } else {
            burgerMenu.classList.remove('opened');
            mobileMenu.classList.remove('show');
            body.classList.remove('fix');
    
            isMenuOpen.checked = false;
        }
    }
}

//open search menu
let searchButton  = document.getElementById('searchButton');
let headerLinks   = document.querySelector('.header-menu');
let links         = document.querySelector('.header-phone-cart-search');
let isSearchOpen  = document.getElementById('isSearchOpen');
let searchWrapper = document.querySelector('.searchFieldWrapper');
let linksWrapper  = document.querySelector('.header-phone-cart-search');

if ( headerLinks != null ) {
    headerLinks = headerLinks.querySelector('.header-links');
}

if ( links != null ) {
    links = links.querySelectorAll('a');
}

if ( searchButton != null ) {
    searchButton.onclick = () => {
        if ( !isSearchOpen.checked ) {
            headerLinks.style.display = 'none';
            links.forEach(link => link.style.display = 'none');
            searchWrapper.style.display = 'block';
            linksWrapper.style.flexGrow = 1;
    
            isSearchOpen.checked = true;
        } else {
            headerLinks.style.display = 'flex';
            links.forEach(link => link.style.display = 'inline');
            searchWrapper.style.display = 'none';
            linksWrapper.style.flexGrow = 0;
    
            isSearchOpen.checked = false;
        }
    }
}

//clear search
let clearSearch  = document.getElementById('clearSearch');

if ( clearSearch != null ) {
    clearSearch.onclick = () => {
        searchWrapper.querySelector('#searchField').value = '';
    }
}

//same shit for mobile
let searchButtonMobile = document.getElementById('searchButtonMobile');
let isMobileSearchOpen = document.getElementById('showMobileSearch');
let mobileSearch       = document.querySelector('.search-menu');

if ( searchButtonMobile != null ) {
    searchButtonMobile.onclick = () => {
        if ( !isMenuOpen.checked ) {
            mobileSearch.style.display = 'flex';
            body.classList.add('fix');
    
            isMobileSearchOpen.checked = true;
        }
    }
}

//clear search
let clearSearchMobile = document.getElementById('clearSearchMobile');

if ( clearSearchMobile != null ) {
    clearSearchMobile.onclick = () => {
        searchWrapper.querySelector('#searchFieldMobile').value = '';
    }
}

let cancelMobileSearch = document.getElementById('cancelMobileSearch');

if ( cancelMobileSearch != null ) {
    cancelMobileSearch.onclick = () => {
        mobileSearch.style.display = 'none';
        body.classList.remove('fix');
    
        isMobileSearchOpen.checked = false;
    }
}

// main page

let imageSlider = document.getElementById('image-slider');

if ( imageSlider != null ) {
    var splide = new Splide( '#image-slider', {
        type     : 'loop',
        autoplay : true,
    
    });
    
    splide.mount();
}
