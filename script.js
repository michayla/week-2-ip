var myInput=prompt("Insert word");
var arrays=myInput.split(" ");

/*for(var x=0;x<arrays.length;x+=1){
    if(arrays[x]===arrays.charAt[arrays.length-1]) {



    }
}*/


var newArray=arrays.map(function(array){
    if(typeof (array.charAt[array.length-1])=== "number"){
        array=array+1;
        alert("hi");
        return array;

    }
    else{
        
        return array.concat("1");
    }

});

alert(newArray);