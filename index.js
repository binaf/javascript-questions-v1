// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// console.log([1,2,3,4,5].at(3))

const dectectDeviceType = () =>
  /Andriod|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'mobile'
    : 'desktop';
// console.log(dectectDeviceType);

const productPreviewList = [
  {
    name: 'Bloc WC eau bleue HARPIC',
    image: 'https://media.carrefour.fr/medias/31eb4a9b08f7380193f5667cebc9ff4d/p_200x200/03215776103207-a1c1-s01.jpg',
    highlightLabel: null,
  },
  {
    name: 'Eau de javel multi-usages LA CROIX',
    image: 'https://media.carrefour.fr/medias/da3aa4bda3b43f6dbb8140aecdc2223a/p_200x200/08718951062580-a1r1-s01.jpg',
    highlightLabel: null,
  },
  {
    name: "Jus d'orange sans pulpe sans sucres ajoutés JOKER",
    image: 'https://media.carrefour.fr/medias/771c5a1d955d32b9aa380327be264665/p_200x200/03123349012392-a1r1-s02.jpg',
    highlightLabel: null,
  },
  {
    name: 'Eau  de source CRISTALINE',
    image: 'https://media.carrefour.fr/medias/bbfef45932d23b96adf7464bf8b0ce71/p_200x200/3274080001005-photosite-20211029-181921-0.jpg',
    highlightLabel: null,
  },
  {
    name: "Petits pois carottes extra-fins CARREFOUR CLASSIC'",
    image: 'https://media.carrefour.fr/medias/77db7e30340734f198fabc8a1bc6c32b/p_200x200/3560070322787-photosite-20210309-174238-0.jpg',
    highlightLabel: 'loyalty',
  },
  {
    name: 'Maïs doux croquant CARREFOUR',
    image: 'https://media.carrefour.fr/medias/18a706fcec6e3ae78b675d7a28af3ef2/p_200x200/3270190110354-photosite-20190611-171042-0.jpg',
    highlightLabel: null,
  },
  {
    name: 'Céréales muesli fruits/noix JORDANS',
    image: 'https://media.carrefour.fr/medias/3d76bdaf21273d5b8ffe2c28958827da/p_200x200/5010477348678-photosite-20211110-171134-0.jpg',
    highlightLabel: null,
  },
  {
    name: 'Céréales Muesli Crunchy aux noix CARREFOUR',
    image: 'https://media.carrefour.fr/medias/3049e5408e78365d8c0893b0f9743c7b/p_200x200/3560071013097-photosite-20200218-173601-0.jpg',
    highlightLabel: null,
  },
],

const fallbackProductPreviewList = [
  {
    name: 'returningbanner.shopper.products.eggs',
    image: '/images/products/eggs.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.bananas',
    image: '/images/products/bananas.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.pomegranateJuice',
    image: '/images/products/pomegranate-juice.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.orangeJuice',
    image: '/images/products/orange-juice.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.showerGel',
    image: '/images/products/shower-gel.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.cheese',
    image: '/images/products/cheese.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.cereals',
    image: '/images/products/cereals.jpeg',
  },
  {
    name: 'returningbanner.shopper.products.detergent',
    image: '/images/products/detergent.jpeg',
  },
]

const getHighlightIconData = (highlightLabel) => {
  if (highlightLabel === 'promotion') {
    return {
      highlightIconName: '54',
      highlightIconColor: 'color-promotion-2',
      highlightIconClass: 'returning-banner-shopper__highlight--promo',
    }
  }
  if (highlightLabel === 'loyalty') {
    return {
      highlightIconName: '55',
      highlightIconColor: 'color-standard-2',
      highlightIconClass: 'returning-banner-shopper__highlight--loyalty',
    }
  }
  return {}
}

const makeProductPreview = productPreviewList => (product, index) => {
  const productPreview = productPreviewList[index]
  if (productPreview) {
    return {
      ...productPreview,
      ...productPreview.highlightLabel && getHighlightIconData(productPreview.highlightLabel),
      image: productPreview.image ?? '/images/product-default.png',
    }
  }
  return product
}

const productPreviewListWithFallback = fallbackProductPreviewList.map(makeProductPreview(productPreviewList))

console.log('productPreviewListWithFallback', productPreviewListWithFallback)