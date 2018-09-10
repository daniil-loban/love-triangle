/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   if (preferences.length < 3) {
        return 0
   }
   var cutCount = preferences.length-2 // for examle: if preferences.length == 3 check only 1st 
   var triangles = 0
   for (var i=0; i<cutCount; i++) {
        
        var current = preferences[i] 
        var second = preferences[current-1]
        var third  = preferences[second-1]

        if (third == i+1 && current > i+1 && second > i+1){
            triangles++
            /*
            console.log( (i+1) + " Spichonee loves " + current + " Spichonee.")
            console.log( current + " Spichonee loves " + second + " Spichonee.")
            console.log( second + " Spichonee loves " + (i+1)+ " Spichonee.")
            */
        }
   }
   return triangles
};
