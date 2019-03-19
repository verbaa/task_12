function Transport(name) {
    this.name = name;
    this.speed = 0;
}
Transport.prototype.go = function(speed) {
    console.log(this.name + ' передвигается ');
};

// Сухопутный

function Land(name) {
    Transport.apply(this, arguments);
    this.speed = 110;
}

Land.prototype = Object.create(Transport.prototype);
Land.prototype.constructor = Land;

Land.prototype.road = function () {
    console.log(this.name + " ездит по дороге " + this.speed)
};

var land = new Land('тачка');
land.go();
land.road();

function Car(name) {
    Land.apply(this, arguments);
    this.color = "white"
}

Car.prototype = Object.create(Land.prototype);
Car.prototype.constructor = Car;


Car.prototype.garage = function () {
    console.log(this.name + " цветом " + this.color)
};

var car = new Car('Volvo');

car.go();
car.garage();

function Bike(name) {
    Land.apply(this, arguments);
    this.color = "green"
}

Bike.prototype = Object.create(Land.prototype);
Bike.prototype.constructor = Bike;


Bike.prototype.garage = function () {
    console.log(this.name + " цветом " + this.color)
};

var bike = new Bike('Yamaha');

bike.go();
bike.garage();

//мореходный

function Nautical(name) {
    Transport.apply(this, arguments);
    this.speed = 30;
}

Nautical.prototype = Object.create(Transport.prototype);
Nautical.prototype.constructor = Land;

Nautical.prototype.sea = function () {
    console.log(this.name + " Плывет по морю " + this.speed)
};


function Boat(name) {
    Nautical.apply(this, arguments);

}

Boat.prototype = Object.create(Nautical.prototype);
Boat.prototype.constructor = Car;


Boat.prototype.moored = function () {
    console.log(this.name + " причалила" )
};

var boat = new Boat('Лодка');

boat.moored();
boat.go();


function Ship(name) {
    Nautical.apply(this, arguments);

}

Ship.prototype = Object.create(Nautical.prototype);
Ship.prototype.constructor = Ship;


Ship.prototype.sail = function () {
    console.log(this.name + " перевозит товар" )
};

var ship = new Ship('Грузовое судно');

ship.sail();
ship.go();





