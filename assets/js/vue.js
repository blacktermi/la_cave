// data
const products = [
    //Whisky
    { id: 1, description: "Jack Daniel", tag: "whisky", price: 2000, img: 'assets/img/img1.JPG' },
    { id: 2, description: 'Jack Daniel', tag: "whisky", price: 2000, img: 'assets/img/img2.JPG' },
    { id: 3, description: 'Jack Daniel', tag: "whisky", price: 3000, img: 'assets/img/img1.JPG' },
    { id: 4, description: 'Jack Daniel', tag: "whisky", price: 3000, img: 'assets/img/img2.JPG' },
    //vins
    { id: 5, description: 'Jack Daniel', tag: "vins", price: 4000, img: 'assets/img/img1.JPG' },
    { id: 6, description: 'Jack Daniel', tag: "vins", price: 4000, img: 'assets/img/img2.JPG' },
    { id: 7, description: 'Jack Daniel', tag: "vins", price: 5000, img: 'assets/img/img1.JPG' },
    { id: 8, description: 'Jack Daniel', tag: "vins", price: 5000, img: 'assets/img/img2.JPG' },
    //Champagne
    { id: 9, description: 'Jack Daniel', tag: "champagne", price: 6000, img: 'assets/img/img1.JPG' },
    { id: 10, description: 'Jack Daniel', tag: "champagne", price: 6000, img: 'assets/img/img2.JPG' },
    { id: 11, description: 'Jack Daniel', price: 7000, tag: "champagne", img: 'assets/img/img1.JPG' },
    { id: 12, description: 'Jack Daniel', price: 7000, tag: "champagne", img: 'assets/img/img2.JPG' },
];

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return {
            products,
            searchkey: '',
            liked: [],
            cart: []
        }
    },
    computed: {
        filteredList() {
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchkey.toLowerCase());
            })
        },
        getLikeCookie() {
            let cookieValue = JSON.parse($cookies.get('like'));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue
        },
        cartTotalAmount() {
            let total = 0;
            for (let item in this.cart) {
                total = total + (this.cart[item].quantity * this.cart[item].price)
            }
            return total;
        },
        itemTotalAmount() {
            let itemTotal = 0;
            for (let item in this.cart) {
                itemTotal = itemTotal + (this.cart[item].quantity);
            }
            return itemTotal;
        }
    },
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    $cookies.set('like', JSON.stringify(this.liked));
                }, 300);
            })
        },
        addToCart(product) {

            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === product.id) {
                    return this.cart[i].quantity++
                }
            }
            this.cart.push({
                id: product.id,
                img: product.img,
                description: product.description,
                price: product.price,
                tag: product.tag,
                quantity: 1
            })
        },
        cartPlusOne(product) {
            product.quantity = product.quantity + 1;
        },
        cartMoinsOne(product, id) {
            if (product.quantity == 1) {
                this.cartSuppItem(id);
            } else {
                product.quantity = product.quantity - 1;
            }
        },
        cartSuppItem(id) {
            this.$delete(this.cart, id)
        }
    },
    mounted: () => {
        this.getLikeCookie;
    }
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
const router = new VueRouter({
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