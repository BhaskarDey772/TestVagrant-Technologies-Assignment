class Planet {
    constructor(name, surfaceGasses="", moons="", rings=""){
        this.name = name;
        this.surfaceGasses = surfaceGasses;
        this.moons = moons;
        this.rings = rings;
    }

    moonCountHandler(planets){
       planets.map((item, index)=>{
            if(item.rings==="Yes"){
                console.log(`${item.name} has ${item.moons} moons and rings`);
            }
        })
    }

    surfaceGassesHandler(planets){
        let gasses = []
        let gasObject = {}
        let count=0
        planets.map((item, index)=>{
            if(item.surfaceGasses!==""){
                gasses.push(...item.surfaceGasses.split(","));
            }
        }
        )
        gasses.map((item, index)=>{
            if(gasObject[item]===undefined){
                gasObject[item] = 1;
            }else{
                gasObject[item]++;
            }
        }
        )
        for(let item in gasObject){
           if(gasObject[item]>count){
               count = gasObject[item];
           }
        }
        for(let item in gasObject){
            if(gasObject[item] === count){
                console.log(`${item} is the most abundant gas in the solar system`);
            }
         }
    }

}

    


module.exports = Planet;