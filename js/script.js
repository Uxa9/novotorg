// header

var itemsInCart = document.getElementById('itemsInCart');

if (itemsInCart != null) {
  if (Number(itemsInCart.innerText) > 0) {
    itemsInCart.style.display = 'flex';
  }
}

//open mobile menu
var burgerMenu = document.getElementById('hamburgerMenu');
var isMenuOpen = document.getElementById('showMobileMenu');
var mobileMenu = document.querySelector('.mobile-menu');
var body = document.querySelector('.wrapper');

if (burgerMenu != null) {
  burgerMenu.onclick = () => {
    if (!isMenuOpen.checked) {
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
var searchButton = document.getElementById('searchButton');
var headerLinks = document.querySelector('.header-menu');
var links = document.querySelector('.header-phone-cart-search');
var isSearchOpen = document.getElementById('isSearchOpen');
var searchWrapper = document.querySelector('.searchFieldWrapper');
var linksWrapper = document.querySelector('.header-phone-cart-search');

if (headerLinks != null) {
  headerLinks = headerLinks.querySelector('.header-links');
}

if (links != null) {
  links = links.querySelectorAll('a');
}

if (searchButton != null) {
  searchButton.onclick = () => {
    if (!isSearchOpen.checked) {
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
var clearSearch = document.getElementById('clearSearch');

if (clearSearch != null) {
  clearSearch.onclick = () => {
    searchWrapper.querySelector('#searchField').value = '';
  }
}

//same shit for mobile
var searchButtonMobile = document.getElementById('searchButtonMobile');
var isMobileSearchOpen = document.getElementById('showMobileSearch');
var mobileSearch = document.querySelector('.search-menu');

if (searchButtonMobile != null) {
  searchButtonMobile.onclick = () => {
    if (!isMenuOpen.checked) {
      mobileSearch.style.display = 'flex';
      body.classList.add('fix');

      isMobileSearchOpen.checked = true;
    }
  }
}

//clear search
var clearSearchMobile = document.getElementById('clearSearchMobile');
var searchFieldMobile = document.getElementById('searchFieldMobile');

if (clearSearchMobile != null) {
  clearSearchMobile.onclick = () => {
    searchFieldMobile.value = '';
  }
}

var cancelMobileSearch = document.getElementById('cancelMobileSearch');

if (cancelMobileSearch != null) {
  cancelMobileSearch.onclick = () => {
    mobileSearch.style.display = 'none';
    body.classList.remove('fix');

    isMobileSearchOpen.checked = false;
  }
}

// main page

var imageSlider = document.getElementById('image-slider');

if (imageSlider != null) {
  var splide = new Splide('#image-slider', {
    type: 'loop',
    autoplay: true,

  });

  splide.mount();
}

// catalog

var catalogSorter = document.getElementById('catalogSorter');

if (catalogSorter != null) {
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
      c.addEventListener("click", function (e) {
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
    a.addEventListener("click", function (e) {
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

// Переключатель размера торта
var cakeWeight = document.getElementById('cakeRange');

if (cakeWeight != null) {
  var cakeWeightValue = document.querySelector('.cake-weight-selector').children;
  var outputCakeWeight = document.querySelector('.output-cake-weight');

  Array.from(cakeWeightValue).forEach((element, index) => {
    element.onclick = () => {
      switch (index) {
        case 0:
          cakeWeight.value = 3;
          changeWeightInfo(3);
          break;
        case 1:
          cakeWeight.value = 6;
          changeWeightInfo(6);
          break;
        case 2:
          cakeWeight.value = 9;
          changeWeightInfo(9);
          break;
        case 3:
          cakeWeight.value = 12;
          changeWeightInfo(12);
          break;
        case 4:
          cakeWeight.value = 18;
          changeWeightInfo(18);
          break;
        default:
          cakeWeight.value = 3;
          changeWeightInfo(3);
          break;
      }
    }
  });

  cakeWeight.oninput = function () {
    changeWeightInfo(this.value);
  }

  cakeWeight.onchange = function () {
    changeWeightInfo(this.value);
  }

  changeWeightInfo = (value = 3) => {
    outputCakeWeight.children[0].innerHTML = `${value} кг`;
    outputCakeWeight.children[1].innerHTML = `${Math.floor(value * 5)} порций`; //ну рэально
  }
}

var cakeDecor = document.getElementById('cake-decor');

if (cakeDecor != null) {
  var splide = new Splide('#cake-decor', {
    pagination: false,
    autoWidth: true,
    // perPage: 4,
    // padding: { left: '5%', right: '5%' },
    gap: 18,
    rewind: true,
  });
  splide.mount();
}

var dropArea = document.getElementById('dropArea');
var formButton = document.getElementById('fileElem');
var filesArray = [];

if (dropArea != null && formButton != null) {
  dropArea.onclick = (e) => {
    formButton.click();
  }
  formButton.addEventListener('change', buttonChange, false);

  function buttonChange(event) {
    var files = formButton.files;
    handleFiles(files);
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    dropArea.classList.add('highlight');
  }

  function unhighlight(e) {
    dropArea.classList.remove('highlight');
  }

  dropArea.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;

    handleFiles(files);
  }

  async function previewFile(file) {
    var reader = new FileReader();
    var gallery = document.getElementById('gallery');
    reader.readAsDataURL(file);
    reader.onloadend = await function () {
      var imageContainer = document.createElement('div');
      var img = document.createElement('img');
      var crossHover = document.createElement('div');
      var cross = document.createElement('div');

      imageContainer.classList.add('imageBlock');
      crossHover.classList.add('cross-hover');
      cross.classList.add('cross');
      img.src = reader.result;

      crossHover.appendChild(cross);
      imageContainer.appendChild(img);
      imageContainer.appendChild(crossHover);

      // crossHover.addEventListener('click', removeImage, false);
      imageContainer.addEventListener('click', preventDefaults, false);

      gallery.appendChild(imageContainer);
    }

    // gallery.childNodes.forEach((image, index) => {
    //     console.log(image);
    //     image.onClick = (e) => {
    //         preventDefaults(e);
    //         filesArray.splice(index, 1);
    //         gallery.childNodes[index].remove();
    //     }
    // });
  }

  async function handleFiles(files) {
    files = [...files];

    filesArray = [...filesArray, ...files];

    if (files.length != 0) {
      var dropAreaText = document.getElementById('dropArea').querySelectorAll('p');
      dropAreaText[0].style.display = 'none';
      dropAreaText[1].style.display = 'none';
    }

    document.getElementById('gallery').innerHTML = '';
    await filesArray.forEach(previewFile);

    // document.getElementById('gallery').childNodes.forEach((image, index) => {
    //     console.log(image);
    //     image.onClick = (e) => {
    //         // preventDefaults(e);
    //         filesArray.splice(index, 1);
    //         gallery.childNodes[index].remove();
    //     }
    // });
  }
}

var cakePageSlider = document.getElementById('cakePageSlider');

if (cakePageSlider != null) {
  document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#cakePageSlider', {
      type: 'fade',
      fixedWidth: 562,
      fixedHeight: 562,
      rewind: true,
      pagination: false,
      arrows: false,
      cover: true,
      breakpoints: {
        1200: {
          fixedWidth: 450,
          fixedHeight: 450,
        },
        980: {
          fixedWidth: 560,
          fixedHeight: 560,
        },
        621: {
          fixedWidth: 560,
          fixedHeight: 560,
        },
        620: {
          fixedWidth: 500,
          fixedHeight: 500,
        },
        520: {
          fixedWidth: 400,
          fixedHeight: 400,
        },
        420: {
          fixedWidth: 300,
          fixedHeight: 300,
        },
        320: {
          fixedWidth: 200,
          fixedHeight: 200,
        }
      }
    });

    var thumbnails = new Splide('#thumbnailSlider', {
      fixedWidth: 95,
      fixedHeight: 95,
      gap: 10,
      rewind: true,
      pagination: false,
      cover: true,
      isNavigation: true,
      perMove: 1,
      perPage: 5,
      direction: 'ttb',
      height: '502px',
      wheel: true,
      releaseWheel: true,
      trimSpace: 'move',
      breakpoints: {
        1200: {
          height: '400px',
        },
        981: {
          direction: 'ttb',
          height: '400px',
          padding: 0,
          arrows: true
        },
        980: {
          direction: 'ltr',
          autoHeight: true,
          width: '80%',
          padding: { left: '10%', right: '10%' },
          arrows: false
        }
      }
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    lightGallery(document.getElementById('cakePageLightgallery'), {
      licenseKey: '0000-0000-0000-0001',
      speed: 500,
    });
  });
}

//clear user review
var clearButton = document.getElementById('clearButton');

if (clearButton != null) {
  clearButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('userReview').value = '';
  }
}

// textarea parent highlight 

var userReview = document.getElementById('userReview');

if (userReview != null) {
  userReview.onfocus = () => {
    document.getElementsByClassName('user-review-field')[0].classList.add('field-active');
  }

  userReview.onblur = () => {
    document.getElementsByClassName('user-review-field')[0].classList.remove('field-active'); 
  }
}

//user rating
var starsRatingWrapper = document.querySelector('.review-rating');

if (starsRatingWrapper != null) {
  var starsRating = starsRatingWrapper.querySelectorAll('i');
  starsRating.forEach((star, index) => {
    star.onmouseover = (e) => {
      for (i = 0; i <= index; i++) {
        if (!starsRating[i].classList.contains('starring')) {
          starsRating[i].classList.add('starring');
        }
      }
      for (i = index + 1; i < 5; i++) {
        if (starsRating[i].classList.contains('starring')) {
          starsRating[i].classList.remove('starring');
        }
      }
    }

    star.onclick = (e) => {
      for (i = 0; i <= index; i++) {
        if (!starsRating[i].classList.contains('selected')) {
          starsRating[i].classList.add('selected');
        }
      }
      for (i = index + 1; i < 5; i++) {
        if (starsRating[i].classList.contains('selected')) {
          starsRating[i].classList.remove('selected');
        }
      }

      document.getElementById('userRating').value = index;
    }

    starsRatingWrapper.onmouseleave = () => {
      starsRating.forEach(star => {
        if (star.classList.contains('starring')) {
          star.classList.remove('starring');
        }
      });
    }

    //increase / decrease amount of pieces
    var piecesAmount = document.getElementById('piecesAmount');
    var increase = document.getElementById('increasePieces');
    var decrease = document.getElementById('decreasePieces');

    if (increase != null && decrease != null) {
      increase.onclick = () => piecesAmount.value = Number(piecesAmount.value) + 1;
      decrease.onclick = () => (piecesAmount.value != 1) && (piecesAmount.value = Number(piecesAmount.value) - 1);
    }
  });
}

// хуйню эту справа чтобы нормально катало
var cardInfoText = document.querySelector('.card-info-text');
var recommendedCakes = document.querySelector('.recommended-cakes');

if (cardInfoText != null) {
  if (recommendedCakes.getBoundingClientRect().top <= 700) {
    cardInfoText.style.position = 'absolute';
    cardInfoText.style.top = `${recommendedCakes.offsetTop - 400}px`;
  }
  
  var checkOffset = () => {
    if (recommendedCakes.getBoundingClientRect().top <= 700) {
      cardInfoText.style.position = 'absolute';
      cardInfoText.style.top = `${recommendedCakes.offsetTop - 400}px`;
    } else {
      cardInfoText.style.position = 'fixed';
      cardInfoText.style.top = 'auto';
    }
  }
  
  document.addEventListener('scroll', checkOffset);
}

var newsPhotoGallery = document.getElementById('newsPhotoGallery');

if ( newsPhotoGallery != null ) {
  lightGallery(document.getElementById('newsPhotoGallery'), {
      licenseKey: '0000-0000-0000-0001',
      speed: 500,
  });
}

// тут насрано, но это для красивого select

var shopListSelector = document.getElementById('shopListSelector');

if (shopListSelector != null) {
  var x, i, j, l, ll, selElmnt, a, b, c;
  
  x = document.getElementsByClassName("shop-city-selector");
  l = x.length;
  for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
  
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 0; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e) {
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
      a.addEventListener("click", function (e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
      });
  }
  
  function closeAllSelect(elmnt) {
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
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
              x[i].classList.add("select-hide");
          }
      }
  }
  
  document.addEventListener("click", closeAllSelect);
}

// 

var clearCartButton = document.getElementById('clearCart');

if (clearCartButton != null) {
  var popup = document.querySelector('.popup-wrapper');
  var closePopup = document.getElementById('closePopup');
  var body = document.querySelector('.wrapper');
  
  clearCartButton.onclick = () => {
      popup.style.display = 'flex';
      body.classList.add('fix');
  
  }
  
  closePopup.onclick = () => {
      popup.style.display = 'none';
      body.classList.remove('fix');
  }
  
  // increase | decrease amounts
  var increaseAmount = document.querySelectorAll('.plus');
  var decreaseAmount = document.querySelectorAll('.minus');
  var pieceAmount    = document.querySelectorAll('.piece-amount');
  
  increaseAmount.forEach((item, index) => {
      item.onclick = () => {
          pieceAmount[index].value = Number(pieceAmount[index].value) + 1;
          document.querySelector('input[name=update_cart]').style.display = "block";
          var e = new CustomEvent("change");
          pieceAmount[index].dispatchEvent(e);
      }
  });
  
  decreaseAmount.forEach((item, index) => {
      item.onclick = () => {
          if ( pieceAmount[index].value > 1 ) {
            pieceAmount[index].value = Number(pieceAmount[index].value) - 1;
            document.querySelector('input[name=update_cart]').style.display = "block";
            var e = new CustomEvent("change");
            pieceAmount[index].dispatchEvent(e);
          }
      }
  });
}

// date

var datePicker = document.getElementById('date');

if (datePicker != null) {
  new AirDatepicker('#date', {
    dateFormat: "dd MMMM yyyy"
  });

  var delivery        = document.getElementById('delivery');
  var selfPick        = document.getElementById('selfPick');
  var payOffline      = document.getElementById('payOffline');
  var payOnline       = document.getElementById('payOnline');
  var deliveryRadio   = document.getElementById('deliveryRadio');
  var selfPickRadio   = document.getElementById('selfPickRadio');
  var payOfflineRadio = document.getElementById('payOfflineRadio');
  var payOnlineRadio  = document.getElementById('payOnlineRadio');
  
  delivery.onclick = () => {
    if ( delivery.classList.contains('button') == false ) {
        delivery.classList.add('button');
        selfPick.classList.remove('button');
        document.querySelector('.delivery').style.display = 'block';
        document.querySelector('.selfPick').style.display = 'none';
        deliveryRadio.checked = true;
    }
  }
  
  selfPick.onclick = () => {
    if ( selfPick.classList.contains('button') == false ) {
        selfPick.classList.add('button');
        delivery.classList.remove('button');
        document.querySelector('.selfPick').style.display = 'block';
        document.querySelector('.delivery').style.display = 'none';
        selfPickRadio.checked = true;
    }
  }
  
  payOffline.onclick = () => {
    if ( payOffline.classList.contains('button') == false ) {
        payOffline.classList.add('button');
        payOnline.classList.remove('button');
        document.querySelector('.payOffline').style.display = 'block';
        document.querySelector('.payOnline').style.display = 'none';
        payOfflineRadio.checked = true;
    }
  }
  
  payOnline.onclick = () => {
    if ( payOnline.classList.contains('button') == false ) {
        payOnline.classList.add('button');
        payOffline.classList.remove('button');
        document.querySelector('.payOnline').style.display = 'flex';
        document.querySelector('.payOffline').style.display = 'none';
        payOnlineRadio.checked = true;
    }
  }
  
  //submit form 
  var submitButton = document.getElementById('submitFormButton');
  var nameField  = document.getElementById('name');
  var phoneField = document.getElementById('phone');
  var dateField  = document.getElementById('date');
  var timeField  = document.getElementById('time');
  
  var errorFirst  = document.getElementById('errorFirst');
  var errorSecond = document.getElementById('errorSecond');
  
  submitButton.onclick = (e) => {
    e.preventDefault();

    if ( nameField.value         != '' && 
         phoneField.value        != '' && 
         dateField.value         != '' && 
         timeField.selectedIndex != '0' ) {
           document.querySelector('.order-wrapper').submit();
         }
  
    if ( nameField.value == '' )  {
        nameField.classList.add('invalid');
        errorFirst.style.opacity = 1;
    }
    if ( phoneField.value == '' ) {
        phoneField.classList.add('invalid');
        errorFirst.style.opacity = 1;
    }
    if ( dateField.value == '' )  {
        dateField.classList.add('invalid');
        errorSecond.style.opacity = 1;
    }
    if ( timeField.selectedIndex == '0' ) {
        timeField.classList.add('invalid');
        errorSecond.style.opacity = 1;
    }
  }
  
  nameField.onchange = () => {
    if ( nameField.value != '' ) nameField.classList.remove('invalid');
  }
  
  phoneField.onchange = () => {
    if ( phoneField.value != '' ) phoneField.classList.remove('invalid');
  }
  
  dateField.blur = () => {
    if ( dateField.value != '' ) dateField.classList.remove('invalid');
  }
  
  timeField.onchange = () => {
    if ( timeField.selectedIndex != '0' ) timeField.classList.remove('invalid');
  }
}

// заводи баян григорий

var acc = document.getElementsByClassName("accordion-show");

if (acc != null) {
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("accordion-active");
      var panel = this.nextElementSibling;
      console.log(panel);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        console.log(panel.scrollHeight);
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

var layers = document.getElementById('layerPicker')

if (layers != null) {

layers = layers.querySelectorAll('div');

var accordionLayers = document.querySelectorAll('.accordion-show');

  for (var i = 0; i < layers.length; i++) {
    const index = i;
    layers[i].addEventListener('click', () => {
      for (var j = 0; j < layers.length; j++) {
        layers[j].classList.remove('selected');
      }
      layers[index].classList.add('selected');
        for (var j = 0; j < index+1; j++) {
          accordionLayers[j].style.display = "flex";
        }
        for (var j = index+1; j < layers.length; j++) {
          accordionLayers[j].style.display = "none";
        }
    });
  }
}