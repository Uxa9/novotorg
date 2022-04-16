// header

//open mobile menu
let burgerMenu = document.getElementById('hamburgerMenu');
let isMenuOpen = document.getElementById('showMobileMenu');
let mobileMenu = document.querySelector('.mobile-menu');
let body = document.querySelector('.wrapper');

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
let searchButton = document.getElementById('searchButton');
let headerLinks = document.querySelector('.header-menu');
let links = document.querySelector('.header-phone-cart-search');
let isSearchOpen = document.getElementById('isSearchOpen');
let searchWrapper = document.querySelector('.searchFieldWrapper');
let linksWrapper = document.querySelector('.header-phone-cart-search');

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
let clearSearch = document.getElementById('clearSearch');

if (clearSearch != null) {
  clearSearch.onclick = () => {
    searchWrapper.querySelector('#searchField').value = '';
  }
}

//same shit for mobile
let searchButtonMobile = document.getElementById('searchButtonMobile');
let isMobileSearchOpen = document.getElementById('showMobileSearch');
let mobileSearch = document.querySelector('.search-menu');

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
let clearSearchMobile = document.getElementById('clearSearchMobile');

if (clearSearchMobile != null) {
  clearSearchMobile.onclick = () => {
    searchWrapper.querySelector('#searchFieldMobile').value = '';
  }
}

let cancelMobileSearch = document.getElementById('cancelMobileSearch');

if (cancelMobileSearch != null) {
  cancelMobileSearch.onclick = () => {
    mobileSearch.style.display = 'none';
    body.classList.remove('fix');

    isMobileSearchOpen.checked = false;
  }
}

// main page

let imageSlider = document.getElementById('image-slider');

if (imageSlider != null) {
  var splide = new Splide('#image-slider', {
    type: 'loop',
    autoplay: true,

  });

  splide.mount();
}

// catalog

let catalogSorter = document.getElementById('catalogSorter');

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
let cakeWeight = document.getElementById('cakeRange');

if (cakeWeight != null) {
  let cakeWeightValue = document.querySelector('.cake-weight-selector').children;
  let outputCakeWeight = document.querySelector('.output-cake-weight');

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

let cakeDecor = document.getElementById('cake-decor');

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

let dropArea = document.getElementById('dropArea');
let formButton = document.getElementById('fileElem');
let filesArray = [];

if (dropArea != null && formButton != null) {
  dropArea.onclick = (e) => {
    formButton.click();
  }
  formButton.addEventListener('change', buttonChange, false);

  function buttonChange(event) {
    let files = formButton.files;
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
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
  }

  async function previewFile(file) {
    let reader = new FileReader();
    let gallery = document.getElementById('gallery');
    reader.readAsDataURL(file);
    reader.onloadend = await function () {
      let imageContainer = document.createElement('div');
      let img = document.createElement('img');
      let crossHover = document.createElement('div');
      let cross = document.createElement('div');

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
      let dropAreaText = document.getElementById('dropArea').querySelectorAll('p');
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

let cakePageSlider = document.getElementById('cakePageSlider');

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
let clearButton = document.getElementById('clearButton');

if (clearButton != null) {
  clearButton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('userReview').value = '';
  }
}

//user rating
let starsRatingWrapper = document.querySelector('.review-rating');

if (starsRatingWrapper != null) {
  let starsRating = starsRatingWrapper.querySelectorAll('i');
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

    //increase / decrease amount of pieces
    let piecesAmount = document.getElementById('piecesAmount');
    let increase = document.getElementById('increasePieces');
    let decrease = document.getElementById('decreasePieces');

    increase.onclick = () => piecesAmount.value = Number(piecesAmount.value) + 1;
    decrease.onclick = () => (piecesAmount.value != 1) && (piecesAmount.value = Number(piecesAmount.value) - 1);
  });
}

// хуйню эту справа чтобы нормально катало
let cardInfoText = document.querySelector('.card-info-text');
let loadReviews = document.querySelector('.load-reviews');

if (cardInfoText != null) {
  if (loadReviews.getBoundingClientRect().y <= 500) {
    cardInfoText.style.position = 'absolute';
    cardInfoText.style.top = '1200px';
  }
  
  let checkOffset = () => {
    if (loadReviews.getBoundingClientRect().y <= 500) {
      cardInfoText.style.position = 'absolute';
      cardInfoText.style.top = '1200px';
    } else {
      cardInfoText.style.position = 'fixed';
      cardInfoText.style.top = 'auto';
    }
  }
  
  document.addEventListener('scroll', checkOffset);
}

let newsPhotoGallery = document.getElementById('newsPhotoGallery');

if ( newsPhotoGallery != null ) {
  lightGallery(document.getElementById('newsPhotoGallery'), {
      licenseKey: '0000-0000-0000-0001',
      speed: 500,
  });
}