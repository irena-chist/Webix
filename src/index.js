
const input = document.querySelector('#input'),
    btn  = document.querySelector('.wrapper_btn'),
    close = document.querySelectorAll('.tag_close'),
    wrapper = document.querySelector('.wrapper_tags'),
    tagName = document.querySelectorAll('.tag_name'),
    chbox = document.querySelector('#chbox');

function createCloseElement(value) {
    const newDiv = document.createElement('div'),
        close = document.createElement('close');

    newDiv.classList.add('tag');
    newDiv.textContent = value;

    close.classList.add('tag_close');
    newDiv.appendChild(close);

    close.addEventListener('click', () => {
        if (chbox.checked) {} else {
            wrapper.removeChild(newDiv);
        }
    })
    wrapper.appendChild(newDiv);
}
    
btn.addEventListener('click', () => {

    let items = input.value;

    if (items === '') {
        input.placeholder = 'Fill in this field';
    } else {
        let newItems = [];

        newItems = items.split(',');
        console.log(newItems);
        newItems.forEach((item, i) => {
            createCloseElement(item);

            localStorage.setItem(i, item); // пока работает только со строкой, которую разбивают запятыми.если вводить слово - перезаписывается как нулевой
        });

        input.value = '';
    }
});


chbox.addEventListener('click', () => {
    if (chbox.checked) {
        btn.disabled = true;
        input.disabled = true;
    } else {
        btn.disabled = false;
        input.disabled = false;
    }
});



