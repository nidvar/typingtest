"use strict";
const instructions = '<b>Instructions:</b> Press the START button, and a paragraph will appear. Type the text out onto the textarea as quickly and accurately as possible. Once completed press SUBMIT to view results.'
const text1 = 'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.'
const text2 = 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'
const text3 = 'Often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
const text4 = 'Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design. JavaScript was influenced by programming languages such as Self and Scheme.'
const text5 = 'Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software.'
const text6 = 'As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM.'
let time=0;
const array = [text1, text2, text3, text4, text5, text6];
let score=0;
let wpm=0;
let missedwords=[];
document.getElementById('mybutton').addEventListener('click', ()=>{
    if(document.getElementById('mybutton').innerText==='START'){
        time=0;
        score=0;
        wpm=0;
        missedwords=[];
        document.querySelector('textarea').disabled=false;
        document.getElementById('mybutton').innerText='SUBMIT';
        time = new Date().getTime();
        document.getElementById('text').innerHTML = array[(Math.floor(Math.random()*6))];
        document.getElementById('results').style.display='none';
        document.querySelector('textarea').value='';
    }else{
        document.getElementById('mybutton').innerText='START';
        document.querySelector('textarea').disabled=true;
        const the_text = document.getElementById('text').innerHTML.split(' ');
        const user_text = document.querySelector('textarea').value.split(' ');
        the_text.forEach((item)=>{
            user_text.includes(item)?score++:missedwords.push(item)
        })
        const end_time = new Date().getTime();
        document.getElementById('results').style.display='block';
        document.getElementById('timetaken').innerHTML = `<b>Time taken:</b> ${(end_time-time)/1000} seconds`;
        document.getElementById('score').innerHTML = `<b>Your score:</b> ${score}/${the_text.length}. (${((score/the_text.length)*100).toFixed(2)}%)`;
        document.getElementById('missedwords').innerHTML = `<b>Incorrect words:</b><br /> ${missedwords.join('<br>')}`;
        document.getElementById('wpm').innerHTML = `<b>Words per minute(WPM):</b> ${(score/((end_time-time)/1000))*60}`;
    }
})