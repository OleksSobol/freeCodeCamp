
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

   if (prop === "artist"){
      collection[id][prop] = value;      
    }    

    if(prop === "tracks" && !collection[id].hasOwnProperty(prop)){
      // create an empty array before adding the new 
      //value to the album's corresponding property
        console.log(prop);
        console.log(collection[id].hasOwnProperty(prop));

      var arr = [];
      
    }
    if(prop === "tracks" && value !=""){
      //push value onto end of the album's existing 
      //tracks array.
      var arr = [];
      arr.push(value);
      collection[id][prop] = arr;
    }
    


  if(prop != "tracks" && value != ""){
    
   
    if(value === ""){
      //delete the fiven prop property from album
    }
    
    return collection;
  }
  else{
    return collection;
//     return collection;    
  }
  
//   console.log(collection[id].tracks);
}

// Alter values below to test your code
console.log(5439, "artist", "ABBA");
updateRecords(5439, "artist", "ABBA");

console.log(5439, "tracks", "Take a Chance on Me");
updateRecords(5439, "tracks", "Take a Chance on Me");

console.log(2548, "artist", "");
updateRecords(2548, "artist", "");

console.log(1245, "tracks", "Addicted to Love");
updateRecords(1245, "tracks", "Addicted to Love");

console.log(2468, "tracks", "Free");
updateRecords(2468, "tracks", "Free");

console.log(2548, "tracks", "");
updateRecords(2548, "tracks", "");

