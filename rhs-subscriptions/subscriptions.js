// sk_1x1_4fa4c3b606732f2a62dc6220c2d03fec336024d29ccfd0b0cec5b62dca9f2fae
let apiKey;
let rechargeData;

function setApiKey(){
    apiKey=document.querySelector('#apiKey').value;
}

function fetchData(){
    setApiKey();
    console.log(apiKey);
    fetch('https://api.rechargeapps.com',{
        headers:{
            'X-Recharge-Access-Token':apiKey
        },
    })
    .then(data=>rechargeData=data);
    
    console.log(rechargeData);
}