// var newObj = {
// 	name: 'bag',
// 	test: function() {
// 		console.log( 'test' );
// 	}
// };

// var Foo = function() {
// 	this.name = 'foo';
// }

// var foo = new Foo();
// console.log( foo );
// Foo.trototype = newObj;
// var foo2 = new Foo();
// console.log( foo2 );

// console.log( foo.__proto__ === Foo.prototype );

// var animal = {
// 	canRun: true
// };

// var Wolf = function() {
// 	this.name = 'wolf';
// }

// var Grey = function() {
// 	this.color = 'grey';
// }

// var Black = function() {
// 	this.color = 'black';
// }

// var Chicken = function(){
// 	this.name = 'chicken';
// };

// Chicken.prototype = animal;
// Chicken.prototype.Kuka = function() {
// 	console.log( 'Кукареку!');
// };

// Wolf.prototype = animal;

// var chicken = new Chicken();

// var wolfy = new Wolf();

// Grey.prototype = wolfy;

// Black.prototype = wolfy;

// var wolfyGrey = new Grey();
// var wolfyBlack = new Black();

// console.log( wolfy );
// console.log( wolfyGrey );
// console.log( wolfyBlack );
// console.log( chicken );


// var protoOfWolfyGrey = Object.getPrototypeOf( wolfyGrey );
// console.log( protoOfWolfyGrey );

// for( var key in wolfyGrey ){
// 	if( !wolfyGrey.hasOwnProperty(key) ) continue;
// 	console.log( key + " : " + wolfyGrey[key] );
// }

/*var wolf = {
	canRun: true
};

var dog = Object.create( wolf );
console.log( dog );

function inherit(proto){
	function F(){};
	F.prototype = proto;
	return new F;
}
 
var dog2 = inherit( wolf );
console.log( dog2 ); */


