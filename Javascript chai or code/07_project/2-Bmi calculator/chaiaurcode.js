const form = document.querySelector('form')

// console.log(form);

// this usecase give empty value 
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e){
    e.preventDefault()

    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please enter a vaalid ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter a vaalid ${weight}`
    }

    else {
       const bmi = ( weight / ((height*height)/1000)).toFixed(2)
       //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    
})