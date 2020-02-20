var myInput=prompt("Insert word");
var arrays=myInput.split("");

arrays.forEach(function(array){
    if(typeof array ===="number"){
        array=array+1;
        alert("h1");
        //return array;

    }
    else{
        arrays.push(1);
        //return newArray;
    }

});

alert(arrays);