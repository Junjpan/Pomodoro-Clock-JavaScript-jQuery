$(document).ready(function(){
  //var value=$("#sectionmins").text();
  var sectiontime=25;
 // var sectiontime=Number(value);
  //var value1=$("#breakmins").text();
 // var breaktime=Number(value1);
 var sec=0;
  mins=25;
  var breaktime=5;
  var mode="session";
  breakmins=5;
  
 
    
   $("#sectionminus").on("click",function(){
     sec=0;
     if(sectiontime>1){
   sectiontime=sectiontime-1;
    $("#sectionmins").text(sectiontime);
    $("#min").text(sectiontime); 
    $("#second").html(sec+"0");
     mins=sectiontime;  
     transitiontime=sectiontime;  
    } 
   }) 
    $("#sectionplus").on("click",function(){ 
      sec=0;
   sectiontime=sectiontime+1;
    $("#sectionmins").text(sectiontime);
    $("#min").text(sectiontime); 
   $("#second").html(sec+"0");
    mins=sectiontime;
    transitiontime=sectiontime;  
   }) 
  
  
  $("#breakminus").on("click",function(){
   
     if(breaktime>1){
   breaktime=breaktime-1;
    $("#breakmins").text(breaktime);
    breakmins=breaktime;
    } 
   }) 
    $("#breakplus").on("click",function(){  
   breaktime=breaktime+1;
    $("#breakmins").text(breaktime);  
   breakmins=breaktime; 
   });
  
  // var mins=Number($("#sectionmins").text());
  var mins=sectiontime;
   //var sec=Number($("#second").text()); 
 
    function countdown(){
    
  
      if(sec>10){
        sec=sec-1;
        $("#second").text(sec);
        $("#min").text(mins);
      }else if(sec==0&&mins>0){
        sec=60;
        mins=mins-1;
        
      }else if(sec>0&&sec<=10){
        sec=sec-1;
        $("#second").html("0"+sec);
      }else if (sec==0&&mins==0&&mode=="session"){
        $("#status").text("break");
       $("#min").text(breakmins);
        mode="break";
        mins=breakmins;
        }else if (sec==0&&mins==0&&mode=="break"){
        $("#status").text("session");
       $("#min").text(transitiontime);
        mode="session";
        mins=transitiontime;//???????
        }
    }
 
  var stopid;
  status="start";//new

    $("#circle").on("click",function(){
      if (status=="start"){
      stopid=setInterval(countdown,1000);
      status="pause";} else if(status=="pause"){
        clearInterval(stopid);
        status="start";
      }   
    });
    
  
  
  
  
  
  
  
})