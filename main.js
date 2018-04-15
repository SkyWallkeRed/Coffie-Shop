var coffeeShop = {
    beans: 40,
    money: 0,
    beansPrice: 1,

    drinkPrice: {
        latte: 5,
        americano: 5,
        doubleShot: 5,
        frenchPress: 5
    },

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function(drinkType) {
        if (drinkType in this.drinkRequirements && this.beans >= this.drinkRequirements[drinkType]) {
            console.log(drinkType)

            this.money = this.money + this.drinkPrice[drinkType];
            this.beans = this.beans - this.drinkRequirements[drinkType]
            console.log(coffeeShop.beans)
        } else if (this.beans > 1) {
            console.log('Not enoth beans im going to get beans one moment')
            buyBeans();

        }
    }

}

function buyBeans() {
    if (coffeeShop.money > 10) {
        coffeeShop.beans = coffeeShop.beans + coffeeShop.money
        coffeeShop.money = coffeeShop.money - coffeeShop.beansPrice;
        console.log('frash beans are here');

    }
}



coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");