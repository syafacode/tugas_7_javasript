var tinggiBadan = [170,171,167,172,168,164,160,154,176]

function withForOf(){
    for(let tb of tinggiBadan){
        console.log(tb);
    }
}

function withFor(){
    for(var x = 0; x < tinggiBadan.length; x++){
        console.log(tinggiBadan[x]);
    }
}

withFor();

//perbedaan dengan for biasa vs for of dari segi hasil sama saja
//namun lebih simple dan efisien menggunakan for of, dengan hasil yang sama
//tetapi lebih ringkas penggunaan for of