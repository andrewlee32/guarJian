
let submit = document.getElementById('submit')
submit.addEventListener('click', e => {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let number = document.getElementById('number').value
    let password = document.getElementById('password').value
    let check = document.getElementById('check')

    console.log('email')
    console.log('name')
    console.log('address')
    console.log('number')

    if(name === ''){
        alert('Please fill in your name')
        return
    }
    if(email === ''){
        alert('Please fill in your email')
        return
    }
    if(address === ''){
        alert('Please fill in your address')
        return
    }
    if(number === ''){
        alert('Please fill in your number')
        return
    }
    if(password === ''){
        alert('Please fill in your password')
        return
    }
    if(!check.checked){
        alert('Please check the checkbox')
        return
    }
})
