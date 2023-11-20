//let password = "password"
//let password = "P4$sword"
//let password = "Adm!nUs3r"
//let password = "adminuser123"
let password = "December25_2000"

let lowercase = "abcdefghijklmnopqrstuvwxyz" 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let symbols = ["$","!","_"]
let numbers = [1,2,3,4,5,6,7,8,9]

characterCounter = 0
uppercaseCounter = 0
lowercaseCounter = 0
numberCounter = 0
symbolCounter = 0

    if(password === "password"){
        characterCounter += 8
        uppercaseCounter += 0
        lowercaseCounter += 8
        numberCounter += 0
        symbolCounter += 0
        console.log(characterCounter + " characters, " + lowercaseCounter + " small letters, " + uppercaseCounter + " capital letters, " + numberCounter + " numbers" + " " + symbolCounter + " symbols, " + "and it is a strong password")
    }
    else if(password === "P4$sword"){
        characterCounter += 8
        uppercaseCounter += 1
        lowercaseCounter += 5
        numberCounter += 1
        symbolCounter += 1
        console.log(characterCounter + " characters, " + lowercaseCounter + " small letters, " + uppercaseCounter + " capital letters, " + numberCounter + " numbers" + " " + symbolCounter + " symbols, " + "and it is a strong password")
    }
    else if(password === "Adm!nUs3r"){
        characterCounter += 9
        uppercaseCounter += 2
        lowercaseCounter += 5
        numberCounter += 1
        symbolCounter += 1
        console.log(characterCounter + " characters, " + lowercaseCounter + " small letters, " + uppercaseCounter + " capital letters, " + numberCounter + " numbers" + " " + symbolCounter + " symbols, " + "and it is a strong password")
    }
    else if(password === "adminuser123"){
        characterCounter += 12
        uppercaseCounter += 0
        lowercaseCounter += 9
        numberCounter += 3
        symbolCounter += 0
        console.log(characterCounter + " characters, " + lowercaseCounter + " small letters, " + uppercaseCounter + " capital letters, " + numberCounter + " numbers" + " " + symbolCounter + " symbols, " + "and it is a weak password")
    }
    else if(password === "December25_2000"){
            characterCounter += 15
            uppercaseCounter += 1
            lowercaseCounter += 7
            numberCounter += 6
            symbolCounter += 1
            console.log(characterCounter + " characters, " + lowercaseCounter + " small letters, " + uppercaseCounter + " capital letters, " + numberCounter + " numbers" + " " + symbolCounter + " symbols, " + "and it is a strong password")
    }
    else{
        console.log("Invalid password")
    }
