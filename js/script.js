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

// catalog

let catalogSorter = document.getElementById('catalogSorter');

if ( catalogSorter != null ) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("catalog-sorter");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      a = document.createElement("DIV");
      a.setAttribute("class", "select-filters-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-filters select-filters-hide");
      for (j = 0; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-filters-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    
    function closeAllSelect(elmnt) {
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-filters");
      y = document.getElementsByClassName("select-filters-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-filters-hide");
        }
      }
    }
    
    document.addEventListener("click", closeAllSelect);
}
