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