/**
 * Created by vasiliy on 13.11.16.
 */

function log(text) {
    console.log(text)
}

/////////////////// Вызов функции как функции ///////////////////////////////

// функция возвращающая контекст this в not strict mode
function getContextFunc(){
    return this;
}
log(getContextFunc()); // возвращает объект window


// функция возвращающая контекст this в strict mode
function getContextStrictModeFunc(){
    "use strict"
    return this;
}
log(getContextStrictModeFunc()); // возвращает объект undefined


/////////////////// Вызов функции как метода ///////////////////////////////

// создаем объект ninja
var ninja = {getNinja:getContextFunc,version:"1.1.1",getVersion(){return this.version}};
log(ninja.getNinja()); // возвращает объект ninja
log(ninja.getVersion()); // возвращает свойство version из объекта ninja

////////////////// Функция конструктор //////////////////////////////

function Ninja(label,version,func) { // очень похоже на java class
   this.label  = label;
   this.version  = version;
   this.func = func;
}

// создаем два объекта из функции
var ninja1 = new Ninja("ninja 1","1.1.1",function (){return this}); // здесь вернется ninja
var ninja2 = new Ninja("ninja 2","2.1.1", () => {return this}); // здесь вернется window так arrow функция наследует контекст присутствующий во время вызова

log(ninja1.label);
log(ninja1.version);
log(ninja1.func());

log(ninja2.label);
log(ninja2.version);
log(ninja2.func());


////////////////// Вызов функции через call() и apply() //////////////////

var nindzu = {name: "Prometei",weapon:"Laser"};

function editNindzu(name){
    this.name = name;
}

editNindzu.call(nindzu,"Figa");
editNindzu.apply(nindzu,["Ronaldo"]);

log(nindzu);

// Arrow функция не имеет своего this а наследует его из контекста
// который присутствует во время вызова



