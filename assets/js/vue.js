// data
const products = [
    //Whisky
  { id: 1, description: "Quarz Luxe", tag:"whisky", price: 2000, img: 'assets/img/quarz-luxe.JPG'},
  { id: 2, description: 'Curren Business', tag:"whisky", price: 2000, img: 'assets/img/curren-business.JPG'},
  { id: 3, description: 'Curren Sport', tag:"whisky", price: 3000, img: 'assets/img/curren-sport.JPG'},
  { id: 4, description: 'Jaragar Racing', tag:"whisky", price: 3000, img: 'assets/img/jaragar-racing.JPG'},
    //vins
  { id: 5, description: 'Liges Hommes', tag:"vins", price: 4000, img: 'assets/img/liges-hommes.JPG'},
  { id: 6, description: 'Maserati Mechanical', tag:"vins", price: 4000, img: 'assets/img/maserati-mechanical.JPG'},
  { id: 7, description: 'Montre Mecanique', tag:"vins", price: 5000, img: 'assets/img/montre-mecanique.JPG'},
  { id: 8, description: 'Brand Designer', tag:"vins", price: 5000, img: 'assets/img/brand-designer.JPG'},
    //Champagne
  { id: 9, description: 'Relogio Masculino', tag:"champagne", price: 6000, img: 'assets/img/relogio-masculino.JPG'},
  { id: 10, description: 'Tissot Multifunction', tag:"champagne", price: 6000, img: 'assets/img/tissot-multifunction.JPG'},
  { id: 11, description: 'Hip Hop Gold', price: 7000, tag:"champagne", img: 'assets/img/hiphop-gold.JPG'},
  { id: 12, description: 'Mesh Genova', price: 7000, tag:"champagne", img: 'assets/img/mesh-genova.JPG'},
];

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return {
            products,
            searchkey: '',
        }
    },
    computed: {
        filteredList(){
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchkey.toLowerCase());
            })
        }
    },
}
const UserSettings = {
    template: '<h1>Parametre utilisateur</h1>',
    name: 'UserSettings' 
}

const WishList = {
    template: '<h1>CaveList</h1>',
    name: 'Wishlist' 
}

const ShoppingCart = {
    template: '<h1>Panier</h1>',
    name: 'ShoppingCart' 
}

// router
const router = new VueRouter ({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-settings', component: UserSettings, name: 'UserSettings' },
        { path: '/wish-list', component: WishList, name: 'WishList' },
        { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
    ]
})

const vue = new Vue({
    router
}).$mount('#app');