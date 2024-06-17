// r ==>Select the Rock button
let r = document.querySelector("#ra");
// ra ==>Select Rock image
let ra = r.innerHTML;
// p ==>Select the Paper  button
let p = document.querySelector("#pa");
// pa ==>Select Paper image
let pa = p.innerHTML;
//  s ==>Select the Scissors button
let s = document.querySelector("#sa");
// sa ==>Select Scissors image
let sa = s.innerHTML;
// pl1 ==> Playear-1
let pl1 = document.querySelector("#pl1");
// pl2 ==> Playear-2 (Computer)
let pl2 = document.querySelector("#pl2");
// scr1 ==> Playear-1's score display
let scr1 = document.querySelector(".score1");
// scr2 ==> Playear-2's score display
let scr2 = document.querySelector(".score2");
// s1 ==> playear-1's point
let s1 = 0;
// s2 ==> playear-2's point
let s2 = 0;

r.addEventListener("click", function () {
    pl1.innerHTML = ra;
    let p2 = Math.floor(Math.random() * 3) + 1;

    if (p2 == 1) {
        pl2.innerHTML = ra;
        pl2.style.transform = 'rotateY(180deg)';
    }
    else if (p2 == 2) {
        pl2.innerHTML = pa;
        pl2.style.transform = 'rotateY(180deg)';
        s2++;
    }
    else {
        pl2.innerHTML = sa;
        pl2.style.transform = 'rotateY(180deg)';
        s1++;
    }
    // points display
    scr1.innerHTML = s1;
    scr2.innerHTML = s2;
    
});

p.addEventListener("click", function () {
    pl1.innerHTML = pa;
    let p2 = Math.floor(Math.random() * 3) + 1;
    
    if (p2 == 1) {
        pl2.innerHTML = ra;
        pl2.style.transform = 'rotateY(180deg)';
        s1++;
    }
    else if (p2 == 2) {
        pl2.innerHTML = pa;
        pl2.style.transform = 'rotateY(180deg)';
    }
    else {
        pl2.innerHTML = sa;
        pl2.style.transform = 'rotateY(180deg)';
        s2++;
    }
    
    // points display
    scr1.innerHTML = s1;
    scr2.innerHTML = s2;
});

s.addEventListener("click", function () {

    pl1.innerHTML = sa;
    let p2 = Math.floor(Math.random() * 3) + 1;

    if (p2 == 1) {
        pl2.innerHTML = ra;
        pl2.style.transform = 'rotateY(180deg)';
        s2++;
    }
    else if (p2 == 2) {
        pl2.innerHTML = pa;
        pl2.style.transform = 'rotateY(180deg)';
        s1++;
    }
    else {
        pl2.innerHTML = sa;
        pl2.style.transform = 'rotateY(180deg)';
    }
    // points display
    scr1.innerHTML = s1;
    scr2.innerHTML = s2;
});