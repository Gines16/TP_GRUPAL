
const form = document.querySelector('.form-register')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target));

    // Verificar si hay campos vacios
    const { haveEmpty, ...empty } = haveTextFieldEmpty(fields)
    if(haveEmpty){
        const emptyFieldsStringified = Object.keys(empty).map(f => f.toLocaleUpperCase()).join(', ')
        alert(`Los siguientes campos estan vacios: ${emptyFieldsStringified}`)
        return
    }

    // Verificar que los terminos fueron aceptados
    const termsCheckbox = form.querySelector('#terminos')
    if(!termsCheckbox.checked){
        alert('Debes aceptar los terminos y condiciones para que tu registro sea exitoso.')
        return
    }

    // Si llenó los campos y el checkbox esta checked...
    alert('Te has registrado exitosamente, ahora puedes iniciar tu sesion.')
    window.location.href = `${window.location.origin}/templates/login.html`
})

const haveTextFieldEmpty = (textFields) => { 
    return Object.keys(textFields)
                .reduce((acum, key) => {
                    const isEmpty = textFields[key].trim().length === 0
                    
                    if(isEmpty){
                        acum['haveEmpty'] = true
                        acum[key] = isEmpty
                    }

                    return acum
                }, { haveEmpty: false })
}


