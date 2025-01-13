// import { NextRequest, NextResponse } from "next/server"

import { NextResponse } from "next/server"

// const shoppingList = [
//     {name: "shoes"}

// ]
// export function GET (){
//     return NextResponse.json({
//         message: "Hello from Route Handlers",

//     })
// }

const fruitList = [
    {name: "PineApple",
    Price: "350/KG",
    MinQty: "1KG",
    },
    {
        name: "Mango",
        Price: "400/KG",
        MinQty: "1KG"
    },
    {
        name: "Banana",
        Price: "120/KG",
        MinQty: "1KG"

    }
]
export function GET (){
    return NextResponse.json(fruitList)
        
    }
