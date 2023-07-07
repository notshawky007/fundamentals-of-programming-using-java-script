let user = {
    // property
    firstName:'Mostafa',
    lastName:'Shawky',
    email:'mostafashawky100000@gmail.com',
    age:26,
    skills:['html','css','js','php','mysql'],
    active:false,
    phoneNumber:{
        first:'0106547687',
        second:'0126574687',
    },
    address:{
        Egypt:'Cairo',
        Uae:'Dubai',
    },
    // method
    isActive:function(){
        if(user.active === true){
            return 'you are active';
        }
        else{
            return 'you are not active';
        }
    },
    getAge:function(){
        if(user.age >= 18)
        {
            return 'available';
        }
        else{
            return 'not available'';
        }
    },
};
console.log(user.isActive())
console.log(user['getAge']())