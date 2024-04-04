const grade = prompt("Masukan Nilai Kamu: ")

if (grade >=85  && grade <=100 ){
    console.log("GRADE A")
} else if (grade >=75 && grade <=85 ){
    console.log("GRADE B")
} else if (grade >=65 && grade <=75 ){
    console.log("GRADE C")
} else if (grade >=55 && grade <=65){
    console.log("GRADE D")
} else if (grade <=55 ){
    console.log("GRADE E")
}