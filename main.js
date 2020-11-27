let array = [1, 2, 3, 4];
const sumSquaredEvenNo = (a) => {
    let newArr = a;
    return newArr
        .filter( (b) => {
            // If b is an even number, return it
            if(b%2 === 0) {
                return b;
            }
        })
        // Square the even numbers
        .map( b => b * b )
        // Sum up the squared even numbers
        .reduce( (prev, curr) => {
            return prev + curr;
        })
}
document.getElementById("input").innerHTML = array;
document.getElementById("output").innerHTML = sumSquaredEvenNo(array);