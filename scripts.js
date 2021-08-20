class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
         return this.food += 2     
    }

    eat () {
        if(this.food > 0) {
            return this.food-=1
        }
        if(this.food === 0) {
            return this.isHealthy = false
        }
    }
}



class Wagon {
    constructor (capacity) {
        this.capacity = capacity 
        this.list = [] 
   
    }
    getAvailableSeatCount () {
        return this.capacity - this.list.length
    }

    join (traveler) {
        if(this.getAvailableSeatCount() > 0){
            this.list.push(traveler)
        }
    }

    shouldQuarantine() {
     
        let result = this.list.some(viajante => viajante.isHealthy === false)
        return result
  
    }

    totalFood () {

    return this.list.reduce((acc, viajante) => acc + viajante.food,0)
        
    }

}




let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);