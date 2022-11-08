const swiper = new Swiper('.swiper', {
    // Optional parameters
 autoplay: {
    delay: 3000,
    disableOnInteraction: false,
 },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });

  function createHomePageProductCard(obj) {

    var mainDiv = document.createElement('div');
    mainDiv.classList.add('product-card');
    
    
    var productLink = document.createElement('a');
    productLink.href = 'details.html?p='+obj.id;

    var productImage = document.createElement('img');
    productImage.classList.add('product-image');

    productImage.src = obj.preview;
    productImage.alt = obj.name + ' Pic';

    productLink.appendChild(productImage);

    var innerDiv = document.createElement('div');
    innerDiv.classList.add('product-meta');

    var productName = document.createElement('h4');
    var productNameText = document.createTextNode(obj.name);
    productName.appendChild(productNameText);

    var productBrand = document.createElement('h5');
    var productBrandText = document.createTextNode(obj.brand);
    productBrand.appendChild(productBrandText);

    var productPrice = document.createElement('p');
    var productPriceText = document.createTextNode('Rs ' + obj.price);
    productPrice.appendChild(productPriceText);

    innerDiv.appendChild(productName);
    innerDiv.appendChild(productBrand);
    innerDiv.appendChild(productPrice);

    mainDiv.appendChild(productLink);
    mainDiv.appendChild(innerDiv);

    return mainDiv;
  }
  console.log(createHomePageProductCard);

  $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
    var response = data;

    for(var i=0; i<response.length; i++) {
      if(response[i].isAccessory) {
        $('#accessory-grid').append(createHomePageProductCard(response[i]))
      } else {
        $('#clothing-grid').append(createHomePageProductCard(response[i]))
      }
    }
  });