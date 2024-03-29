function generateRandomMatrix(rows, columnValues) {
    // Initialize an array to store the generated matrix
    let matrix = [];

    for (let i=0; i<columnValues[0]; i+=1)
        for (let j=0; j<columnValues[1]; j+=1)
            for (let k=0; k<columnValues[2]; k+=1)
                matrix.push([i,j,k]);
    return matrix;   
}

function shuffleMatrix(inputMatrix){
    let matrix = JSON.parse(JSON.stringify(inputMatrix));
    for (let i = matrix.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array elements
        [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    }
    //console.log(matrix.length)
    return matrix;
}


// Function to check if two rows have two common values
function hasTwoCommonValues(row1, row2) {
  let commonCount = 0;
  for (let i = 0; i < row1.length; i++) {
    if (row1[i] === row2[i]) {
      commonCount++;
    }
  }
  return commonCount === 2;
}


function orderMatrix2Common(inputMatrix){
    //first row
    let matrix = JSON.parse(JSON.stringify(inputMatrix));
    let orig_length = matrix.length;
    let sel_row = Math.floor(Math.random() * matrix.length);
    var newMatrix = [matrix[sel_row]];
    var pp = matrix[sel_row];
    var newMatrixLength = 1;
    matrix.splice(sel_row, 1); 
   
    do {
        var temp_matrix = [];
        for (let i=0; i< matrix.length; i++){
            if (hasTwoCommonValues(pp, matrix[i]))
                temp_matrix.push(i)     
        }
        /*console.log("Temp_matrix:", JSON.stringify(temp_matrix));*/
        if (temp_matrix.length > 0){
            sel_row = Math.floor(Math.random() * temp_matrix.length);
            /*console.log("Sel row:", sel_row);*/
            newMatrix.push(matrix[temp_matrix[sel_row]]);
            pp = matrix[temp_matrix[sel_row]];
            matrix.splice(temp_matrix[sel_row], 1);
        }
        else{
            break;
        }
        
    } while(newMatrix.length < orig_length);
    return newMatrix;
    
}



/* -------------------------
    Weighted Randoms function 
    ------------------------- 
function weightedRandom(weights) { 
      // Preparing the cumulative weights array.
      // For example:
      // - weights = [1, 4, 3]
      // - cumulativeWeights = [1, 5, 8]
      const cumulativeWeights = [];
      for (let i = 0; i < weights.length; i += 1) {
        cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
      }
      // Getting the random number in a range of [0...sum(weights)]
      // For example:
      // - weights = [1, 4, 3]
      // - maxCumulativeWeight = 8
      // - range for the random number is [0...8]
      const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
      const randomNumber = maxCumulativeWeight * Math.random();
      // Picking the random item based on its weight.
      // The items with higher weight will be picked more often.
      for (let itemIndex = 0; itemIndex < weights.length; itemIndex += 1) {
        if (cumulativeWeights[itemIndex] >= randomNumber) {
          return itemIndex;
        }
      }
    }
*/
    

/* -------------------------
    GENERATE WEIGHTED RANDOMS 
    ------------------------- 
function generateWeightedRandoms(){
        if (this.change != 0){
            // Can change any, but at least one 
            var randoms = [];
            this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
            do{
                randoms = [this.weightedRandom(weights[0]),
                           this.weightedRandom(weights[1]),
                           this.weightedRandom(weights[2])];
            } while (JSON.stringify(randoms) == JSON.stringify(this.randoms));
            this.randoms = randoms;
        }  
        else{
           // Change only one limb 
            let limb = 0;
            let new_val = 0;
            this.previous_randoms = JSON.parse(JSON.stringify(this.randoms));
            do {
               limb = this.weightedRandom(limbWeights);
               new_val = this.weightedRandom(weights[limb]);
            } while (new_val == this.randoms[limb]);
           this.randoms[limb] = new_val;
        }
    }
    */


// weighted randoms for bass, ride, hihat
const weights = [[1,2],
                 [1,1,2,1,1,1,5,4,3,3,5,1,1,3,1],
                 [1,2,2]];

const limbWeights = [1,1,2];