
export default {
    endYear: "2023-06-23", // Data zakończenia roku szkolnego
    symEndYear: "2023-06-09", // Data symbolicznego zakończenia roku szkolnego AKA. wystawianie ocen
    subjects: [
        {
            name: "Język Polski",
            occurences: [ 3, 3, 4, 5 ]
        },
        {
            name: "Matematyka",
            occurences: [ 1, 2, 2, 3, 4, 5 ]
        },
        {
            name: "Język Angielski",
            occurences: [ 1, 2, 5 ]
        },
        {
            name: "Fizyka",
            occurences: [ 1, 2, 2 ]
        },
        {
            name: "Informatyka",
            occurences: [ 1, 4 ]
        },
        {
            name: "Język Niemiecki",
            occurences: [ 3, 3 ]
        },
        {
            name: "Chemia",
            occurences: [ 2, 5 ]
        },
        {
            name: "Biologia",
            occurences: [ 4, 5 ]
        },
        {
            name: "Geografia",
            occurences: [ 2, 5 ]
        },
        {
            name: "Historia",
            occurences: [ 3, 5 ]
        },
        {
            name: "Wiedza o Społeczeństwie",
            occurences: [ 4 ]
        },
        {
            name: "Podstawy Przedsiębiorczości",
            occurences: [ 1 ]
        },
        {
            name: "Wychowanie Fizyczne",
            occurences: [ 2, 4, 4 ]
        },
    ],
    freeDays: [ // Wolne dni w szkole
        "2023-05-02",
        "2023-05-04",
        "2023-05-05",
        "2023-05-08",
        "2023-05-09",
        "2023-05-24",
        "2023-05-25",
        "2023-05-26",
    ],
    winterBreak: { // Ferie Zimowe
        from: "2023-02-13",
        to: "2023-02-26"
    },
    summerBreak: { // Wakacje
        from: "2023-06-24",
        to: "2023-08-30",
    },
    christmasBreak: {
        from: "2023-12-23",
        to: "2023-12-31"
    }
}