function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if(min >= max) {
        alert("O primeiro número não pode ser maior que o segundo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)
}

}

