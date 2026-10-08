let htmlbtn = document.querySelector('#htmlbtn');
let cssbtn = document.querySelector('#cssbtn');
let jsbtn = document.querySelector('#jsbtn');


let html, css, js;

html = document.querySelector('#html-panel');
css = document.querySelector('#css-panel');
js = document.querySelector('#js-panel');


htmlbtn.addEventListener('click', () => {
    html.style.display = 'block';
    css.style.display = 'none';
    js.style.display = 'none';
})

cssbtn.addEventListener('click', () => {
    html.style.display = 'none';
    css.style.display = 'block';
    js.style.display = 'none';
})

jsbtn.addEventListener('click', () => {
    html.style.display = 'none';
    css.style.display = 'none';
    js.style.display = 'block';
})


