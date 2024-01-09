// main
import MainLayout from '~/layouts/Main.vue'
// footer
import FooterLayout from '~/layouts/Footer.vue'
// Navbar
import NavbarLayout from '~/layouts/Navbar.vue'

export default function (Vue, { head }) {
  // Set Main Main as a global component
  Vue.component('MainLayout', MainLayout)
  // Set Footer Footer as a global component
  Vue.component('FooterLayout', FooterLayout)
  // Set Navbar Navbar as a global component
  Vue.component('NavbarLayout', NavbarLayout)

  // head links
  head.link.push({
    rel: 'canonical',
    href: 'https://multividas.com'
  }, {
    rel: 'icon',
    href: 'https://developers.multividas.com/images/logo.svg'
  }, {
    rel: 'shortcut icon',
    href: 'https://developers.multividas.com/images/logo.svg'
  }, {
    rel: 'stylesheet',
    href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1698339335/mv-scss/main.css'
  }, {
    rel: 'stylesheet',
    href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1700411908/mv-scss/footer.css'
  });

  // meta headers
  head.meta.push({
    name: 'theme-color',
    content: '#0f4c81'
  }, {
    name: 'locale',
    content: 'en_US'
  }, {
    name: 'type',
    content: 'social media and blogging platform'
  }, {
    name: 'title',
    content: 'Explore the diverse world of Multividas.'
  }, {
    name: 'description',
    content: 'With Multividas.com you can share short texts and posts, leaving comments and having discussions on threads.'
  }, {
    name: 'keywords',
    content: 'multividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threads'
  }, {
    name: 'author',
    content: 'Soulaimane Yahya'
  }, {
    name: 'robots',
    content: 'index, follow'
  });

  // opengraph meta tags
  head.meta.push({
    property: 'og:description',
    content: 'With Multividas.com you can share short texts and posts, leaving comments and having discussions on threads.'
  }, {
    property: 'og:image',
    content: 'https://developers.multividas.com/images/logo.svg'
  }, {
    property: 'og:url',
    content: 'https://multividas.com'
  }, {
    property: 'og:site_name',
    content: 'Multividas'
  });

  // Twitter Card
  head.meta.push({
    name: 'twitter:card',
    content: 'summary'
  }, {
    name: 'twitter:site',
    content: '@multividaseng'
  }, {
    name: 'twitter:title',
    content: 'Multividas - Social Media and Blogging Platform'
  }, {
    name: 'twitter:description',
    content: 'With Multividas.com you can share short texts and posts, leaving comments and having discussions on threads.'
  }, {
    name: 'twitter:image',
    content: 'https://developers.multividas.com/images/logo.svg'
  });
}
