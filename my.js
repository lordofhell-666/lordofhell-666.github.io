function test(){
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=wA96qaS9amDLTRuYAe2cnYOzU2KbemdvKSVmBI9wjx7PdQlM8l1gwiG-z6LDCLIkU6ZDodzaZkD70N22Yq5cZH-J7N8tI8P_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKJV-4-p-0-VRGf-6kegsLQUUsIHF5OqhOczdaliGNDa-J_uwEPzc3tbA_VkNO9L9KLqt04j3me-s0nOI7Y9E8tgHdawFOPgwNz9Jw9Md8uu&lib=M2BE-JcRFTbHfMPOzhEqzXx7B1Iy45b_w";
    fetch(url)
        .then(d=> d.json())
        .then(d =>{
            document.getElementById("app").textContent = d[0].status;    
    });
}   

document.getElementById("btn").addEventListener("click",test);
