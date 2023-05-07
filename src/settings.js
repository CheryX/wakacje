
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
    freeDays: [
        "2023-01-01", // Nowy Rok
        "2023-01-06", // Trzech Króli
        "2023-04-10", // Poniedziałek Wielkanocny
        "2023-05-01", // Święto Pracy
        "2023-05-03", // Święto Konstytucji 3 Maja
        "2023-05-28", // Zielone Świątki
        "2023-06-08", // Boże Ciało
        "2023-08-15", // Dzień Wojska Polskiego
        "2023-11-01", // Wszystkich Świętych
        "2023-11-11", // Dzień Niepodległości
        "2023-12-25", // Boże Narodzenie (1 dzień)
        "2023-12-26", // Boże Narodzenie (2 dzień)

        // Wolne dni w szkole
        "2023-05-02", // Święto Flagi
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