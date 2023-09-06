
const currentYear = new Date().getFullYear()
let currentSchoolYear = currentYear.toString()

console.log(currentSchoolYear)

if (new Date() > new Date(currentYear, 6, 24)) {
    currentSchoolYear++;
}


export default {
    endYear: currentSchoolYear+"-06-23", // Data zakończenia roku szkolnego
    symEndYear: currentSchoolYear+"-06-12", // Data symbolicznego zakończenia roku szkolnego AKA. wystawianie ocen
    subjects: [
        {
            name: "Język Polski",
            occurences: [ 1, 3, 3, 5 ]
        },
        {
            name: "Matematyka",
            occurences: [ 1, 2, 2, 3, 4 ]
        },
        {
            name: "Język Angielski",
            occurences: [ 1, 3, 5 ]
        },
        {
            name: "Fizyka",
            occurences: [ 1, 3, 4, 4 ]
        },
        {
            name: "Informatyka",
            occurences: [ 1, 4, 4 ]
        },
        {
            name: "Język Niemiecki",
            occurences: [ 5, 5 ]
        },
        {
            name: "Chemia",
            occurences: [ 2 ]
        },
        {
            name: "Biologia",
            occurences: [ 3  ]
        },
        {
            name: "Geografia",
            occurences: [ 1  ]
        },
        {
            name: "Historia",
            occurences: [ 2, 5 ]
        },
        {
            name: "Podstawy Przedsiębiorczości",
            occurences: [ 3 ]
        },
        {
            name: "Wychowanie Fizyczne",
            occurences: [ 2, 2, 4 ]
        },
    ],
    freeDays: [ // Wolne dni w szkole
        "2023-05-01"
    ],
    winterBreak: { // Ferie Zimowe
        from: "2024-01-13",
        to: "2024-01-26"
    },
    summerBreak: { // Wakacje
        from: currentSchoolYear+"-06-24",
        to: currentSchoolYear+"-08-30",
    },
    christmasBreak: {
        from: (currentSchoolYear-1)+"-12-23",
        to: (currentSchoolYear-1)+"-12-31"
    }
}
