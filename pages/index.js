let clickCount = 0;
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("previous")[0];
next.addEventListener("click", function() {
    clickCount++;
    let inactiveRow = document.querySelector(".row.inactive");
    let inactiveRow1 = document.querySelector(".row.inactive1");
    let activeRow = document.querySelector(".row.active");
    if (clickCount === 1) {
        activeRow.style.display = "none";
        inactiveRow.style.display = "flex";
        prev.style.opacity = "1";
        if (window.scrollY === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    } else if (clickCount === 2) {
        inactiveRow.style.display = "none";
        inactiveRow1.style.display = "flex";
        next.style.opacity="0.6";
        prev.style.opacity = "1";
        if (window.scrollY === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
});

prev.addEventListener("click", function() {
    clickCount--;
    let rowActive = document.querySelector(".row.active");
    let rowInactive = document.querySelector(".row.inactive");
    let inactiveRow1 = document.querySelector(".row.inactive1");
    if (inactiveRow1.style.display === "flex") {
        inactiveRow1.style.display = "none";
        rowInactive.style.display = "flex";
        if (window.scrollY === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    } else if (rowInactive.style.display === "flex") {
        rowInactive.style.display = "none";
        rowActive.style.display = "flex";
        if (window.scrollY === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        prev.style.opacity = "0.6";
    }
});
let clickCount1=0;
let prev1=document.getElementsByClassName("previous1")[0];
let next1=document.getElementsByClassName("next1")[0];

next1.addEventListener("click",function(){
    clickCount1++;
    if(clickCount1==1){
    let rowactive=document.querySelector(".row1.active1");
    let rowinactive=document.querySelector(".row1.activein");
    let prev1=document.getElementsByClassName("previous1")[0];
    let slider = document.querySelector("input[type='range']");
    rowactive.style.display="none";
    rowinactive.style.display='flex';
    prev1.style.opacity = "1";
    slider.value = 33;// Change the value of the range slider to 50
    }
    if(clickCount1==2){
    let rowactive=document.querySelector(".row1.active1");
    let rowinactive=document.querySelector(".row1.activein");
    let rowinactive1=document.querySelector(".row1.activein1");
    let slider = document.querySelector("input[type='range']");
    rowactive.style.display="none";
    rowinactive.style.display='none';
    rowinactive1.style.display="flex";   
    rowinactive1.style.overflowX = "hidden";
    slider.value=66;
        }
    if(clickCount1==3){
    let rowactive=document.querySelector(".row1.active1");
    let rowinactive=document.querySelector(".row1.activein");
    let rowinactive1=document.querySelector(".row1.activein1");
    let rowinactive2=document.querySelector(".row1.activein2");
    let slider = document.querySelector("input[type='range']");
    let next1=document.getElementsByClassName("next1")[0];
    rowactive.style.display="none";
    rowinactive.style.display='none';
    rowinactive1.style.display="none";
    rowinactive2.style.display="flex";   
    rowinactive2.style.overflowX = "hidden";
    slider.value=99;
    next1.style.opacity = "0.6";
        }
    });
    prev1.addEventListener("click", function() {
        if (clickCount1 == 3) {
            let rowinactive2=document.querySelector(".row1.activein2");
            let rowinactive1 = document.querySelector(".row1.activein1");
            let slider = document.querySelector("input[type='range']");
            slider.value=0;
            rowinactive2.style.display = "none";
            rowinactive1.style.display = "flex";
            clickCount1--;
        }   
        if (clickCount1 == 2) {
            let rowinactive2=document.querySelector(".row1.activein2");
             let rowinactive1 = document.querySelector(".row1.activein1");
            let rowinactive = document.querySelector(".row1.activein");
            let slider = document.querySelector("input[type='range']");
            slider.value=33;
            rowinactive2.style.display="none";
            rowinactive1.style.display = "none";
            rowinactive.style.display = 'flex';
            next1.style.opacity="1";
            clickCount1--;
        }       
        else if (clickCount1 == 1) {
            let rowinactive = document.querySelector(".row1.activein");
            let rowactive = document.querySelector(".row1.active1");
            let prev1=document.getElementsByClassName("previous1")[0];
            let slider = document.querySelector("input[type='range']");
            rowinactive.style.display = "none";
            rowactive.style.display = 'flex';
            slider.style.display="block ";
            slider.value=0;
            clickCount1--;
            next1.style.opacity="1";
            prev1.style.opacity = "0.6";
        }
        
});