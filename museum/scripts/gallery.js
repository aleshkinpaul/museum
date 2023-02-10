const galleryList = document.querySelector('.gallery-list');
const galleryImageNames = [];

for (let i = 0; i < 15; i++) galleryImageNames.push(i + 1);
galleryImageNames.sort(shuffle);

function createGallery(arr) {
  arr.forEach(ind => {
    const galleryListItem = document.createElement('li');
    const galleryListItemLink = document.createElement('a');
    const galleryListItemImage = document.createElement('img');
  
    galleryListItemImage.src = `./assets/img/galery/galery${ind}.jpg`;
    galleryListItemImage.alt = `galery${ind}`;
    galleryListItemLink.href = '#';
    
    galleryListItemImage.classList.add('gallery-list-item-img');
    galleryListItemLink.classList.add('gallery-list-item-link');
    galleryListItem.classList.add('gallery-list-item');
  
    galleryListItemLink.append(galleryListItemImage);
    galleryListItem.append(galleryListItemLink);
    galleryList.append(galleryListItem);
  })
}

function shuffle() {
  return Math.random() - 0.5;
}

createGallery(galleryImageNames);