// let userName: string = "adil";
// let age: number = 20;
// let isSubscribed: boolean = true;
// let skills: string[] = ["html","css","js","tailwindcss","react","redux"]
// let scores: number[] = [34,634,43]
// let emptyArray: [] = [];
// let userDetail: {name: string; age: number; salary: number} = {
//     name: "adil",
//     age: 20,
//     salary: 50000
// }


// interface Details {
//     name: string; 
//     age: number; 
//     salary: number
// }

// let userData: Details = {
//     name: "Afrah",
//     age: 18,
//     salary:30000
// }

// let userDatas: Details = {
//     name: "Thasmeer",
//     age: 22,
//     salary:20000
// }



// type Details = {
//     name: string; 
//     age: number; 
//     salary: number;
//     getName: () => void;
// }

// let userDatas: Details = {
//     name: "Thasmeer",
//     age: 22,
//     salary:20000,
//     getName(){
//         console.log(this.name)
//     }
// }

//union

// let skillsAndValues: (string|number)[] = ["html","js","react","redux",32,53,22]


// function

//inline

// function getUserName({name,age} : {name:string; age: number}) {  
//     return name;
// }

// getUserName({name:"Adil", age: 20})


// Function using type or interface


// type Details = {
//     name: string; 
//     age: number; 
//     salary: number;
//     getName: () => void;
// }

// function getUserName(userDetail : Details) {  
//     return userDetail.name;
// }


//Function Overloading

// function add(num1: number, num2: number): number {
//     return num1 + num2
// }

// console.log(add(23,45))




//Generics

// type UserDetail = {
//     name: string;
//     age: number;
// }

// const userDetail = {
//     name: "Adil",
//     age: 20
// }

// type AdminDetail = {
//     firstName: string;
//     role: string
// }

// const adminDetail = {
//     firstName: "Afrah",
//     role: "Admin"
// }

// function getDetails<T>(details: T): T {
//     return details
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// userValue.name
// adminValue.role



// type UserDetail = {
//     name: string;
//     age: number;
// }

// const userDetail = {
//     name: "Adil",
//     age: 20
// }

// type AdminDetail = UserDetail & {
//     role: string
// }

// const adminDetail = {
//     name: "Afrah",
//     age: 18,
//     role: "Admin"
// }

// function getDetails<T>(details: T): T {
//     return details
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// adminValue.age



// interface UserDetail  {
//     name: string;
//     age: number;
// }

// const userDetail = {
//     name: "Adil",
//     age: 20
// }

// interface AdminDetail extends UserDetail  {
//     role: string
// }

// const adminDetail = {
//     name: "Afrah",
//     age: 18,
//     role: "Admin"
// }

// function getDetails<T>(details: T): T {
//     return details
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// adminValue.name



//enum

enum statusType {
    COMPLETED,
    PENDING,
    FAILED,
} 


function getStatus(orederId: string, status: statusType) {
    console.log(orederId, "==", status);
}

getStatus("1234", statusType.PENDING)