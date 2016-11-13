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