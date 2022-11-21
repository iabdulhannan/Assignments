class Car{

  name = null


  constructor(name) {
    this.name = name
  }


  get name(){
    return this.name
  }

  set name(name){
    this.name = name
  }

}


const myCar = new Car('Bugatti Veyron')
console.log(myCar.name)
