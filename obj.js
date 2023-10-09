let arr=[
    {
        name: "raushan",
        id  :"1",
        marks:"60"

    },
    {
        name: "suraj",
        id  :"12",
        marks:"555"

    },
    {
        name: "aditya",
        id  :"2",
        marks:"55"

    },
    {
        name: "kajal",
        id  :"6",
        marks:"70"

    },
    {
        name: "ayus",
        id  :"2",
        marks:"65"

    },
    {
        name: "radha",
        id  :"9",
        marks:"40"

    }
]
console.log(arr.filter((user)=> user.id!=2))