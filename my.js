function test(){
    const url = "https://script.google.com/macros/s/AKfycbx1bdTnUL1BBh3hMVzl2yFu2dVTz92OwBfB_goAbk222ziay_5UFt2dKhlIpladAy54HA/exec";
    fetch(url,{
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    })
        .then(d=> d.json())
        .then(d =>{
            document.getElementById("app").textContent = d[0].status;    
    });
}   

document.getElementById("btn").addEventListener("click",test);
