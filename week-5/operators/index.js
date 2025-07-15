 // let num1=3
// let num2=2
// let sum=num1+num2
// console.log("SUM;", sum)
// const myDate=new Date();
// const myAmala=myDate.getFullYear()
// console.log ("MYAMALA", myAmala)
// function mylog(olajide){
//     console.log(olajide)
// }
// mylog("olajide")
// const myArray=[1,2,3,4]
// const mySum=myArray[0]
// console.log("mySum", mySum)
// const myNum=myArray[1]
// console.log("myNum", myNum)
// const myNo=myArray[2]
// console.log("myNo", myNo)
// const myNumber=myArray[3]
// console.log("myNumber", myNumber)
const bankAccount = {
    accountNumber: 2228763410,
    accountHolder: "olajide",
    accountName: "sterlingBank",
    balance: "200000"
}
//  bankAccount.accountHolder="favour";
//  console.log(bankAccount.accountHolder)
 const accountNumber=bankAccount.accountNumber
 console.log("ACCOUNTNUMBER: ",accountNumber)
 const accountHolder=bankAccount.accountHolder
console.log("ACCOUNTHOLDER: ",accountHolder)
 const accountName=bankAccount.accountName
 console.log("ACCOUNTNAME: ",accountName)
 const balance=bankAccount.balance
 console.log("BALANCE: ",balance)
const newDate = new Date();
class Book{
    title;
    author;
    constructor(bookTitle, bookAuthor){
        this.title=bookTitle
        this.author=bookAuthor
    }
    getTitle(){
        return this.title
    }
    getAuthor(){
        return this.author
    }
    setTitle(myTitle){
        this.title=myTitle
    }
    setAuthor(myAuthor){
        this.author=myAuthor
    }
}
const precious= new Book("RedeemingLove,FrancisRivers");
precious.setTitle("faith")
precious.setAuthor("favour")
console.log(precious.getTitle())
function mySum(n1,n2){
    const sum=n1+n2;
     return sum
}
const o=mySum(3,5)
console.log(o)
function getOla(boy, girl){
    const sum="tolu"+"favour"
    return sum
}
const l=getOla("tolu","favour")
console.log(l)
function goSum(n1,n2,n3){
    const sum=3+3+7
    return sum
}
const r=goSum(3,3,7)
console.log(r)
