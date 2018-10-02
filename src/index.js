/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   if (preferences.length < 3) return 0

   const decspription = (a, b) => `${a}  Spichonee loves  ${b}  Spichonee.`;    
   const cutCount = preferences.length - 2 // if preferences.length == 3 check only 1st 
   let triangles = 0, 
       current,
       second, 
       third;

   for (let i = 0; i < cutCount; i++) {
        current = preferences[i] 
        second  = preferences[current - 1]
        third   = preferences[second  - 1]

        if (  current > i + 1 
            && second > i + 1
            && third == i + 1 ){
            
            triangles++
            /*
            console.log(decspription( i + 1   , current ));
            console.log(decspription( current , second  ));
            console.log(decspription( second  , i + 1   ));
            */
        }
   }
   return triangles
};
