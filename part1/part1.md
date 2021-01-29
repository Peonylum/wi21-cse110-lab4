1. 3 since i is declared within the for loop and will hold the final value of the last index iterated + 1.
2. 150 since discountedPrice is declared inside of the for loop and will hold the last value of discountedPrice.
3. 150 since finalPrice is declared and initialized at the top of the function and changed inside of the for loop.
4. The function will return the array [50,100,150] since it is putting values inside of the discounted[] based off of the finalPrice which basically just rounds the value to its closest integer value * 100, then divides that value by 100. The discountedPrice is calculated by multiplying the integer at each index by 1 - discount. In our case, this is multiplying by 1/2. So this will give us [Math.round((100 * 1/2) * 100)/100, Math.round((200 * 1/2) * 100)/100, Math.round((300 * 1/2) * 100)/100].
5. An error will be thrown since i is only defined within the scope of the for loop
6. An error will be thrown since discountedPrice is defined
inside of the for loop and is therefore only known within the scope of the for loop.
7. 150 since finalPrice is declared and initialized in the beginning of the function, and it enters the for loop, which changes the value of finalPrice.
8. [50,100,150] will be returned assuming all variable declarations are good. This function will perform the exact same task as discountPrices() from question 4. So, if all variable declarations are viable, then the discounted[] should be filled accordingly.
9. An error will be thrown since i is only defined within the scope of the for loop and you cannot access it outside of it.
10. 150 since discountedPrice is declared and inside of the function and will be hoisted. Assuming the functions are called with the parameters from question 12, the final value of discountedPrice should be printed.
11. There will be an error since finalPrice can not technically be changed because of the const keyword.
12. The function will return [50,100,150]. Assuming that all variables were correctly declared and initialized, the function will behave the same way as in question 4 and 8. So, discounted should be filled correctly.
13. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student.major["name"]
    E. student.courseLoad[0]
14. 
    A. 32 will be printed since the character 3 will turn the whole output into a string, so adding a 2 would essentially be like a concatenation of the character 2.
    B. 1 will be printed since you cannot subtract strings, so '3' will be turned into an int and integer subtraction will be performed.
    C. 3 will be printed since null equates to 0 and so integer addition will be performed.
    D. 3null will be printed since '3' is a character and null will be treated as a string, so these two will be concatenated.
    E. 4 will be printed since the integer value of true will be taken and added to 3, since true equates to 1, it will ad 1 to 3.
    F. 0 will be printed since both false and null equate to an integer value of 0.
    G. 3undefined will be printed since 3 is a string and will therefore concatenate whatever is after it, in this case it will just concatenate undefined to it.
    H. NaN will be printed since this will attempt to perform integer subtraction, but undefined equates to NaN.
15. 
    A. true will be printed since '2' will be converted to 2 and will be compared to 1.
    B. false will be printed since the character '2' is technically greater than the first character of '12'.
    C. true will be printed since the '2' will be converted to a numerical value.
    D. false will be printed since === is a strict equality check and will therefore not perform type conversion between the two data types.
    E. false will be printed since the numerical value of true is 1.
    F. true will be printed since 2 has value, and is therefore true by the Boolean().
16. The == operator will perform type conversion if two different data types are being compared. However, the === operator checks for strict equality and will therefore not perform type conversion between two different data types.
17. How are you? will be printed since 2 is a non-zero value, which equates to true. This is not the same as 2 == true, since this will be checking if 2 == 1 (true equates to an integer value of 1).
19. The result will be [6,8,10]. This occurs because the modifyArray will take in an array and a function as its parameters. Since we passed in doSomething as our second parameter, we will enter modifyArray and its for loop and push whatever is the result of doSomething(array[i], function(x)). function(x) is yet another callback function for doSomething. Once we enter doSomething, we will use array[i] as num and function(x) as its callback. Since doSomething is returning the value of callback(num + 2), it will give us the value of function(array[i] + 2) and within function() it will multiplly the parameter value by 2, which gives us (array[i] + 2) * 2.
21.  Output: 1
             4
             3
             2
    This is because the `console.log()`s without the `setTimeout()` will be printed first, in top to bottom order, followed by the `setTimeout()` with the 0 millisecond delay, then lastly the `setTimeout()` with the 1000 millisecond delay.