window.addEventListener('DOMContentLoaded', () => {

    for(var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }

    for(let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }

    console.log(localStorage);
    localStorage.setItem('name', 'Simeon');
    console.log(localStorage);
    
    let obj = {
        name: 'Caloyan',
        age: 4,
        alive: true,
        null: null,
        undefined: undefined,
        method: function() {
            console.log('Hello')
        }
    }

    console.log(obj);
    localStorage.setItem('myObj', obj);
    localStorage.setItem('myJSON', JSON.stringify(obj));



    let obj1 = localStorage.getItem('myObj')
    let myJSON1 = localStorage.getItem('myJSON1')

    console.log(obj1)
    console.log(myJSON1)

    localStorage.setItem('myArray', [1,2,3,4,5]);
    console.log(localStorage.getItem('myArray'));
    console.log(localStorage.setItem('boot', true));
    console.log(localStorage.getItem('boot'));
    console.log(typeof localStorage.getItem('boot'));
    console.log(typeof localStorage.setItem('myNum', 4));
    console.log(typeof localStorage.getItem('myNum'));

    console.log(JSON.parse(localStorage.getItem('myNum')));

    console.log(localStorage.boot)
    console.log(localStorage.key(1))
    console.log(localStorage.key(0))

    // localStorage.clear()

    for(let i = 0; i < localStorage.length; i++) {
        let key  = localStorage.key(i);
        console.log(localStorage[key]);
    }

    console.log('/////////////////////////////////////////////////////////////////')

    for(let i = 0; i < localStorage.length; i++) {
        let key  = localStorage.key(i);
        console.log(localStorage.getItem(key));
    }

});

    