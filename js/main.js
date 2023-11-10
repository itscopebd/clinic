



// filter about section 


const filter=(filter)=>{

const vission= document.getElementById("vission");
const mission= document.getElementById("mission");
const strategy= document.getElementById("strategy");

if(filter==="vission"){
    mission.style.display="none";
    strategy.style.display="none";
    vission.style.display="block";
}
else if (filter==="mission") {
    vission.style.display="none";
    strategy.style.display="none";
    mission.style.display="block";
}
else if (filter==="strategy") {
    vission.style.display="none";
    mission.style.display="none";
    strategy.style.display="block";
}else{
    mission.style.display="none";
    strategy.style.display="none"; 
}
  
}
filter()

