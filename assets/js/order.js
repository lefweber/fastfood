class Order {
    constructor() {
        this.orderNumber = 1;
        this.quantity = 1;
        this.photo = '';
    }

    new(code) {
        let photo;

        if(code<=4)
            photo = 'red';
        else if(code <=8)
            photo = 'green';
        else
            photo = 'yellow';

        this.photo = 'assets/images/burguer-'+photo+'.png';
        this.quantity = 1;
    }

    increment() {
        this.quantity++;
        return this.getQuantity();
    }

    decrement() {
        if(this.quantity > 1)
            this.quantity--;

        return this.getQuantity();
    }

    getPhoto() {
        return this.photo;
    }

    getQuantity() {
        return this.quantity;
    }
}

export default Order;
