//question no:1(A) odd number

//print odd number by using anonymous function


function groupNumbers(arr) {
   var arr = [1,2,3,4,5,6,7,8,9,10];
   var oddNumbers = arr.filter(number => number % 2 !== 0);
    console.log("Odd numbers " + oddNumbers);
   }
   
   groupNumbers();    
   
   //print odd number by using IIFE function

   let oddNumbers= function (arr) {
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var oddNumbers = arr.filter(number => number % 2 !== 0); console.log("Odd numbers " + oddNumbers);
    }

    oddNumbers();

   //question no:1(B) title case

//by using anonymous function

var capitalize = function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
 }
 
 function titleCase(str) {
   return str.replace(/[^\ \/\-\_]+/g, capitalize);
 }
 
 console.log(titleCase("I'm a little/small tea pot."));


 // by using IIFE function

 var capitalize = function(str) {
   return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase();
 }
 
 function titleCase(str) {
   return str.replace(/[^\ \/\-\_]+/g, capitalize);
 }
 
 console.log(titleCase("I'm a little/small tea pot."));

 //question no:1(c) //sum of array

// by using anonymous function

 let arr = [202,98,9283,378,378,99,3];
 function sumArray(arr, index) {
   if (index === arr.length) {
     return 0;
   }
   return arr[index] + sumArray(arr, index + 1);
 }
 
 console.log("Sum is " + sumArray(arr, 0));

 
 //by using IIFE function


 let arrayy = [1,2,3,4,5,6];
(function(num){
    let total=0;
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }console.log(total);
})(arrayy);

//question no:1(d)primenumber

//by anonymous function

let array5 = [1,2,3,4,5,6];
let PRIME = function(num){
     let output = [];
	for(let i=0;i<num.length;i++){
	    let count = 0;
	  if(num[i]>2){
        for(let j=2;j<num[i];j++){
          if(num[i]%j===0) count++;
    }
  }if (count === 0) output.push(num[i]);
}
 return console.log(output);
};
PRIME(array5);

//by IIFE

let array6 = [5,6,7,9,3,8,4];
(function(num){
     let output = [];
	for(let i=0;i<num.length;i++){
	    let count = 0;
	  if(num[i]>2){
        for(let j=2;j<num[i];j++){
          if(num[i]%j===0) count++;
    }
  }if (count === 0) output.push(num[i]);
}
 return console.log(output);
})(array6);



//question no:1(e)palindrome

// by using anonymous function
const isPalindrome1 = function (n) {
  const str = String(n);
  return str === [...str].reverse().join('');
}

function sumArray(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome1(arr[i])) {
          sum += arr[i]
      }
      
  }
  console.log(sum);    
}


sumArray([12, 313, 11, 44, 9, 1])


// by using IIFE function

let isPalindrome =( function (n) {
  const str = String(n);
  return str === [...str].reverse().join('');
})

function sumArray(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome(arr[i])) {
          sum += arr[i]
      }
      
  }
  console.log(sum);    
}


sumArray([12, 313, 11, 44, 9, 1])


//question no:1(f) Return median of two sorted arrays of the same size

//by anonymous function
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	console.log("Median is "+ getMedian(ar1, ar2, n1));
else
	console.log("Doesn't work for arrays of unequal size");

function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0;
	var count;
	var m1 = -1, m2 = -1;

	
	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

		
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}

//by using IIFE function
var i = 0; 
var j = 0;
let n = 0;
var count;
var m1 = -1, m2 = -1;

const getMedian1 = (function (ar1,ar2){
	
	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

		
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
})([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]);
console.log(getMedian1);


//question no:1 (g) remove duplicates

//ANONYMOUS FUNCTION

let arrayDuplicate ='r,f,d,f,d,f,s,r,r,r,r,d,d,d,b,b,c,k,m'.split(',');
let arrayNoDuplicates = function(arrayDuplicate){
    let array31 = [...new Set(arrayDuplicate)];
    return console.log(array31);
};
arrayNoDuplicates(arrayDuplicate);

 //IIFE FUNCTION

 let arrDup = 'r,f,d,f,d,f,s,r,r,r,r,d,d,d,b,b,c,k,m'.split(',');
 const duplicate = (function(arrDup){
   let array41 = [...new Set(arrDup)];
   return console.log(array41);
 })(arrDup);
 
 //question no.1(h) rotate an array 'k' terms

 //by anonymous function

 function arrayRotate(arr, count) {
  const len = arr.length
  arr.push(...arr.splice(0, (-count % len + len) % len))
  return arr
}


for(let i = -6 ; i <= 6 ; i++) {
  console.log(arrayRotate(['2', '3', '4', '5', '6'], i), i)
}
//by IIFE

let arrr = ['2', '3', '4', '5', '6'];
const arrayRotate1 = function(arrr, count) {
    const len = arr.length
    arrr.push(...arr.splice(0, (-count % len + len) % len))
    return arrr
  }

  
  for(let i = -6 ; i <= 6 ; i++) {
    console.log(arrayRotate1(['2', '3', '4', '5', '6'], i), i)
  }


  //question no:2 

//odd num
let arr = [1,2,3,4,5,6,7,8,9,10]
const oddnum = arr.filter ((num)=>num%2==1);
console.log(oddnum);

//titlecase
const  toTitleCase=(str) => str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ');
console.log(toTitleCase("welcome to w3docs"));

//sum of arraw
let array =[11,33,566,36];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);

//palindrome
let array4= ['asia', 1344, 12321, 'did', 'madam'];

const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
const findPalindrome = array4 => {
   return array4.filter(el => isPalindrome(el));
};
console.log(findPalindrome(array4));

//primenumbers
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



    


 

   

