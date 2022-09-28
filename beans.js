
//creating a shopping activity, with promise
// it resolves to a random beanType that you shopped for.
const shopForBeans = () => {
    return new Promise((resolve, reject)=>{
        const beanTypes = ['kidney', 'fava' , 'pinto'];
        setTimeout(()=>{
            let randomIndex = Math.floor(Math.random()*3);
            let beanType = beanTypes[randomIndex];
            console.log(`I bought ${beanType} type of beans`);
            resolve(beanType);
        },1000)

    })
}
//passing into the beanType you shopped for. 
let soakTheBean = (beanType) => {
    return new Promise((resolve,reject)=>{
        console.log('time to soak the beans');
        setTimeout(() => {
            console.log('bean type is softened');
            resolve(true);
        }, 1000);
    });
}

//isSoftened value will be true by asyncing the soakTheBean promise
let cookTheBeans= (isSoftened) => {
    return new Promise((resolve,reject) => {
        console.log('time to cook the beans');
        setTimeout(()=>{
            if(isSoftened){
                console.log('...the beans are cooked');
            } resolve('\n\nDinner is served!');
        }, 1000)
    })
}

let randomSuccess = () => {
    let num = Math.random();
    if(num<.5){
        return true;
    }else{
        return false;
    }
}
//randomly achieves success or it rejects. 
let cookBeanSouffle = () => {
    return new Promise((resolve,reject) =>{
        console.log('fingers crossed, putting beans in oven')
        
        setTimeout(()=> {
            let success= randomSuccess();
            if(success){
                resolve('Bean Souffle');
            }else{
                reject('Dinner is ruined!');
            }
        },1000)
        

    });
};

async function hostDinnerParty() {
    try{
        const meal = await cookBeanSouffle();
        console.log(`${meal} is served!`);

    }
    catch(err){
        console.log(err)
        console.log('ordering pizza!');
    };
}

hostDinnerParty();



async function makeBeans() {
    const type = await shopForBeans();

    const isSoft = await soakTheBean(type);
    console.log(`isSoft=  ${isSoft}`);

    const dinner = await cookTheBeans(isSoft);
    console.log(dinner);
  }
  makeBeans();


