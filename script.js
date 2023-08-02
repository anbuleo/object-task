///Object.assign()
//using basic
const person={
    name:'vetri',
    age:45
};
const update={
    name:'maran',
    work:'screenplay'
};

console.log(Object.assign(person,update))
///assign in new object
const mobile={
    brand:"redmi",
    price:20000,
    model:'note11'
}
const newMobile=Object.assign({},mobile,{
    price:22000,
    model:'note11(pro)',
    color:'custom'
});
console.log(mobile);
console.log(newMobile)
//modern code - spread operator
const laptop={
    brand:"sony",
    price:30000,
}
const upgradelap={...laptop,...{
    price:35000,
    color:"custom"
}}
console.log(laptop)
////////////////////////////////////////////////////
//Object.defineproperty()
const person1={};
Object.defineProperty(person1,"name",{
        value:'anbu',
        writable:false
})
person1.name='leo'
console.log(person1)
/////////////////////////////////////
//Object.values()
const person2={
    name:'ram',
    age:28,
    work:'auditor'
}
console.log(Object.values(person2));
///to identify the keys=>Object.keys()
console.log(Object.keys(person2));
//////////////////////////////////
//Object.entries()=>
//print the key and values to arrays
const person3=Object.entries(person2);
console.log(person3)
/////////////////////////
//Object.fromEntries()
//it is for arrray object to object
console.log(Object.fromEntries(person3));
////////////////////////////
const person4={
    name:'krish',
    age:30
}
Object.freeze(person4)
person4.name="kannan";
delete person4.name;
console.log(person4);
////////////////////////////
//Object.seal()
//here we can change the value only cant add or delete keys
const person5={
    name:'krish',
    age:30
}
Object.seal(person5)
person5.name="kannan";
delete person5.name;
console.log(person5)