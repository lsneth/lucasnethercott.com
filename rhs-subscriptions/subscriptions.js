// sk_1x1_4fa4c3b606732f2a62dc6220c2d03fec336024d29ccfd0b0cec5b62dca9f2fae
let apiKey;
let rechargeData;

const URL='https://api.rechargeapps.com/charges?limit=250'
const HEADERS={
    'X-Recharge-Access-Token':apiKey,
    'X-Recharge-Version': '2021-11',
    'Accept': 'application/json'
}

function setApiKey(){
    apiKey=document.querySelector('#apiKey').value;
}

function fetchData(){
    setApiKey();
    console.log(apiKey);
    fetch(URL, HEADERS,)
    .then(data=>rechargeData=data);
    
    console.log(rechargeData);
}

// // # Set the amount of records per request to receive
// limit = 5
// let base_url = 'https://api.rechargeapps.com/charges?limit=5'
// headers = {
//     'X-Recharge-Access-Token': 'sk_1x1_4fa4c3b606732f2a62dc6220c2d03fec336024d29ccfd0b0cec5b62dca9f2fae',
//     'X-Recharge-Version': '2021-11',
//     'Accept': 'application/json'
// }

// // # Note that the value of next_cursor is passed as a page_info query param
// function get_next_url(response_data){
//     let next_url = null
//     if (response_data.fetch('next_cursor') != null){
//         let next_cursor = response_data['next_cursor'];
//         let next_url = base_url+'&page_info='+next_cursor;
//     }
//     return next_url
// }

// let all_records = []
// let url = base_url
// while (all_records.length < 20){
//     // # Get the data for this page
//     result = requests.fetch(url, headers=headers)
//     data = json.loads(result.text)

//     // # Add the results to our result set
//     for (charge of data.fetch('charges', [])){
//         all_records.push(charge)
//     }

//     if (!== data.fetch('next_cursor')){
//         break
//     }
//         // # Do not loop again, no more records available
        
//     else{
//         // # Update the URL for the next page
//         url = get_next_url(data)
//         if not url:
//             // # no next url
//             break

//         // # Sleep to avoid hitting rate limits
//         time.sleep(1)
//     }
// }

// pprint(all_records)