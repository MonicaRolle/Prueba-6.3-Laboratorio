// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

//1. Generación aleatoria de la disponibilidad
var randomBoolean = () => Math.random() > 0.5;
console.log(randomBoolean())

var loopArray = (team) => {
    for (var i = 0; i < team.length; i++) {
        for (var j = 0; j < team[i].availability.length; j++) {
            team[i].availability[j] = randomBoolean();
        }

    }

}

var showHourAndTeam = (arrayTime, arrayTeam) => {
    for (var i = 0; i < arrayTeam.length; i++) {
        console.log("Disponibilidad de " + arrayTeam[i].name + ":")
        for (var j = 0; j < arrayTime.length; j++) {
            console.log(arrayTime[j] + " : " + arrayTeam[i].availability[j])
        }
    }
}
loopArray(myTeam)
showHourAndTeam(WORK_HOURS, myTeam);

//2. Buscar hueco libre