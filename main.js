
function sendemail(){
let ans=false;
const usernameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const sourceInput = document.getElementById("email");
const workInput = document.getElementById("work");
console.log(phoneInput.value.length);
if(phoneInput.value.length===11){

    for(let i=0;i<10;i++){
        if(phoneInput.value[i]>=0){
            ans=true;
        }
        else{
            ans=0;
            break;
        }
    }
    if(ans){

        let messageBody = `Name: ${usernameInput.value}<br/>Phone: ${phoneInput.value}<br/>Email: ${sourceInput.value}<br/>${workInput.value}`;
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "omarahmedramadan77@gmail.com",
            subject: "Hotel email",
            from: sourceInput.value,
            message: messageBody
        })
    })
    .then(res => res.json())
    .then(data=>{
        if (data && ans) {
            console.log('yes');
            swal("Successful Send", "You clicked the button!", "success");
        } else {
            swal("Error", "You clicked the button!", "error");
        }
    },)
}
else{
    swal("Error", "An error occurred while sending the email.", "error");
}
}
else{
    swal("Error", "An error occurred while sending the email.", "error");
}
}





let  text=document.getElementById('text'),
imge=document.getElementById('imge'),
text2=document.getElementById('text2'),
imge2=document.getElementById('imge2'),
text3=document.getElementById('text3'),
imge3=document.getElementById('imge3');
let bool=false;
let flogo=document.getElementById('o'),
cenlogo=document.getElementById('h'),
llogo=document.getElementById('m');
let logo=document.getElementById('logo');
let menu = document.querySelectorAll('#menu');
let linkpage = document.getElementById('linkpage');
let color=document.getElementById('color');
let right=document.getElementById('right');
let card2=document.getElementById('card2'),
card1=document.getElementById('card1'),
card3=document.getElementById('card3');
const links=document.querySelector('.links');
const body=document.body;
let all=document.getElementById('all');

let observe=new IntersectionObserver(
function call(element){
    element.forEach(att=>{
        if(att.isIntersecting){
            setTimeout(() => {
                
                att.target.classList.add('show');
            }, 500);
        }
        // else{
        //     att.target.classList.remove('show');
        // } 
    })
}
,option={
    thershold:1,
    // rootMargin:"0px 0px -200px 0px"
})


let hidden=document.querySelectorAll('.hidden');
hidden.forEach(ele=>{
    observe.observe(ele);
    
})




let observe2=new IntersectionObserver(
    function call2(element2){
        element2.forEach(att2=>{
            if(att2.isIntersecting){
                setTimeout(()=>{

                    att2.target.classList.add('show2');
                },500)
                // console.log(att.target.className);
            }
            // else{
            //     att2.target.classList.remove('show2');
            // } 
        })
    }
    ,option2={
        thershold2:1,
        rootMargin2:"0px 0px -300px 0px"
    })

    let hidden2=document.querySelectorAll('.hidden2');
    hidden2.forEach(ele2=>{
        observe2.observe(ele2);
    })
    

    let counter=document.getElementById('counter');
    function circle(){
        let{scrollTop,scrollHeight}=document.documentElement;
        let percent=`${(scrollTop/(scrollHeight-window.innerHeight))*100}`;
        // console.log(percent );
        counter.innerHTML=parseInt(percent)+'%';
        if(parseInt(percent)===100){
            counter.innerHTML=`<a href="#"><i class="fa-solid fa-up-long"></i></a>`
        }
    
    }
    window.addEventListener("scroll",circle);
    

    let app =document.querySelectorAll('#app');
    for(let i=0;i<app.lengt;i++){
    app[i].style.transform='scale('+(Math.random()+0.5)
    }

    
 
    window.onscroll=function(){
        links.style.backgroundColor='#123'
        links.style.boxShadow="1px 2px 4px 2px #000";
        links.style.transition=1+'s';
        if(window.scrollY<=10){
            links.style.backgroundColor='transparent'
            links.style.boxShadow="0px 0px 0px 0px transparent";
            links.style.transition=0.5+'s';
            counter.style.opacity='0',counter.style.transition=1+'s'
        }else{

            counter.style.opacity='1',counter.style.transition=1+'s'
        }   
        

    }

    // start menu 


    let sum=0;
    for(let i=0;i<2;i++){
        
        menu[i].onclick=function(){
            for(let i=0;i<app.length;i++){
                app[i].onclick=function(){

                    right.style.transform= 'translateX(' + -100 + '%)';
                    color.style.transform='translateX(' + 100 + '%)';
                    right.style.transition=1.5+'s'
                    color.style.transition=1+'s'
                    links.style.opacity='1';
                    links.style.transform=2.5+'s';
            body.style.overflowY = 'scroll'; 
                    
                        setTimeout(() => {
                            linkpage.style.zIndex=-1;
                        }, 1000);
                        sum++;
                }
            }
            sum++;
        if(sum%2!=0){
            linkpage.style.opacity='1';
            right.style.transform= 'translateX(' + 0 + '%)';
            color.style.transform='translateX(' + 0 + '%)';
            right.style.transition=1.5+'s'
            color.style.transition=1+'s'
            links.style.opacity='0';
            linkpage.style.zIndex=1000;   
            body.style.overflowY = 'hidden';         
        }
        else{
            right.style.transform= 'translateX(' + -100 + '%)';
            color.style.transform='translateX(' + 100 + '%)';
            right.style.transition=1.5+'s'
            color.style.transition=1+'s'
            links.style.opacity='1';
            links.style.transform=2.5+'s';
            body.style.overflowY = 'scroll'; 
            sum=0;
                setTimeout(() => {
                    linkpage.style.zIndex=-1;
                }, 1000);
        }
        
    }

}


// Show My logo





window.onload=function(){
    body.style.overflow='hidden';
    setTimeout(() => {
 
        flogo.classList.add('apper')
    }, 1000);
    setTimeout(() => {
    flogo.classList.remove('apper')
    cenlogo.classList.add('apper')
        
    }, 2500);
 
    setTimeout(() => {
        cenlogo.classList.remove('apper')
        llogo.classList.add('apper')
            
        }, 4000);
        setTimeout(() => {
            cenlogo.classList.remove('apper')
            llogo.classList.add('apper')
                
            }, 5500);
            setTimeout(() => {
            llogo.classList.remove('apper')

                flogo.style.color='#a8a8a8';
                flogo.style.transition=1.5+'s'
                cenlogo.style.color='#a8a8a8';
                cenlogo.style.transition=1.5+'s'
                llogo.style.color='#a8a8a8';
                llogo.style.transition=1.5+'s'
                }, 6000);
                setTimeout(() => {
                    logo.style.opacity=1;
                    logo.style.transition=1+'s';
                }, 7000);

                setTimeout(() => {
                    loading.classList.replace('width','off');
                    logo.style.opacity=0;
                    logo.transition=1+'s';
                    flogo.style.color='transparent';
                    cenlogo.style.color='transparent';
                    llogo.style.color='transparent';
                    flogo.transition=0.5+'s';
                    cenlogo.transition=0.5+'s';
                    llogo.transition=0.5+'s';

                    all.style.opacity='1';

                }, 8000);    
           
                setTimeout(()=>{
                    loading.style.display='none';
                    body.style.overflowY='scroll';

                },9500)
    }



if(innerWidth<=767){
    links.style.opacity=0;
    window.onscroll=function(){
        links.style.opacity=1;
        links.style.transition=1+'s';
        links.style.backgroundColor='#123'
        if(window.scrollY<=10){
            links.style.opacity=0;
            counter.style.opacity='0',counter.style.transition=1+'s';
            links.style.boxShadow="0px 0px 0px 0px transparent";

        }
        else{

            counter.style.opacity='1',counter.style.transition=1+'s'
        links.style.boxShadow="1px 2px 4px 2px #111";
        }   
    }
}


// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault();
//   }
//   );
//   document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }