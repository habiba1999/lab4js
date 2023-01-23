//constructor functions
function Person(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
Person.prototype.sleep = function(hours){
    if(hours == 7)
    {
        this.sleepMode = "happy";
    }else if(hours<7)
    {this.sleepMode="tired";}
    else{this.sleepMode="lazy";}
}
Person.prototype.eat=function(meals)
{
    if(meals == 3)
    {
        this.healthRate = 100;
    }else if(meals ==2)
    {
        this.healthRate = 75;
    }else if(meals ==1)
    {
        this.healthRate = 50;
    }
}
Person.prototype.buy=function(items)
{
    if(items == 1){this.money-=10;}
}

const p = new Person("habiba Alaa", 1000, "happy", 100);
console.log(p);//person {fullName: 'habiba Alaa', money: 1000, sleepMood: 'happy', healthRate: 100}
p.sleep(12);
p.eat(2);
p.buy(1);
console.log("person After run functions:",p);  //person After run functions: Person {fullName: 'habiba Alaa', money: 990, sleepMood: 'happy', healthRate: 75, sleepMode: 'lazy'}fullName: "habiba Alaa"healthRate: 75money: 990sleepMode: "lazy"sleepMood: "happy"[[Prototype]]: Object

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//class person 

class personClass
{
    constructor(fullName, money, sleepMood, healthRate)
    {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }
    sleep(hours)
    {
        if(hours == 7)
        {this.sleepMode = "happy";}
        else if(hours<7)
        {this.sleepMode="tired";}
        else{this.sleepMode="lazy";}
    }
    eat(meals)
    {
        if(meals == 3)
        {
            this.healthRate = 100;
        }else if(meals ==2)
        {
            this.healthRate = 75;
        }else if(meals ==1)
        {
            this.healthRate = 50;
        }

    }
    buy(items)
    {
        if(items == 1){this.money-=10;}
    }
}
const p2 = new personClass("Aya Alaa El0din", 700, "tired", 50);
console.log("obj before changes: ",p2);//obj before changes:  personClass {fullName: 'Aya Alaa El0din', money: 700, sleepMood: 'tired', healthRate: 50}
p2.sleep(7);
p2.eat(3);
p2.buy(2);
console.log("obj After changes: ",p2);//obj After changes:  personClass {fullName: 'Aya Alaa El0din', money: 700, sleepMood: 'tired', healthRate: 100, sleepMode: 'happy'}


//------------------------------------------------------------------------------------------------

//factory function 

function personFactory (fullName, money,sleepMode,healthRate)
{
    return {
        fullName,
        money,
        sleepMode,
        healthRate,

        sleep(hours)
        {
            if(hours == 7)
            {this.sleepMode = "happy";}
            else if(hours<7)
            {this.sleepMode="tired";}
            else{this.sleepMode="lazy";}
        },
        eat(meals)
        {
            if(meals == 3)
            {
                this.healthRate = 100;
            }else if(meals ==2)
            {
                this.healthRate = 75;
            }else if(meals ==1)
            {
                this.healthRate = 50;
            }
    
    
        },
        buy(items)
        {
            if(items == 1){this.money-=10;}
        }
    };
}
const p3 = personFactory("khadiga ", 600, "happy", 75);
console.log(p3);  //run-> fullName: 'khadiga ', money: 600, sleepMode: 'happy', healthRate: 75, sleep: ƒ, …}      
p3.sleep(11);
p3.buy(1);
console.log(p3); //run-> {fullName: 'khadiga ', money: 590, sleepMode: 'lazy', healthRate: 75, sleep: ƒ, …}

//--------------------------------------------------------------------------------------------------------------

// OLOO
const PersonOloo = {
    init(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
    },

    sleep(hours){
        if(hours == 7)
        {this.sleepMode = "happy";}
        else if(hours < 7)
        {this.sleepMode = "tired";}
        else {this.sleepMode = "lazy";}
    },
    eat(meals){
        if(meals == 3) {this.healthRate = 100;}
        else if(meals ==2) {this.healthRate = 75;}
        else if(meals ==1) {this.healthRate = 50;}
    },
    buy(items){this.money -= 10;}
};
const p4 = Object.create(PersonOloo);
p4.init("Mahmoud", 300, "lazy", 100);
console.log(p4); //run----> {fullName: 'Mahmoud', money: 300, sleepMode: 'lazy', healthRate: 100}
p4.sleep(6);
p4.eat(1);
p4.buy(0);
console.log(p4);   // run ---> {fullName: 'Mahmoud', money: 290, sleepMode: 'tired', healthRate: 50}
