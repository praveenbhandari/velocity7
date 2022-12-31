const url="https://eve.idfy.com/v3/tasks?request_id=f375b6b3-80bf-40f6-92cb-50276e849d99";

async function get(){
    const response=await fetch(url);
    const data = await response.json();
    console.log(data.results);
}