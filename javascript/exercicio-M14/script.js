document.querySelector('form').addEventListener("click",
    function (e) {
        const ufSelect = document.querySelector("#uf");
        const valueUF = ufSelect.value;
        const ufValidated = validar(valueUF)
        

        function validar(uf) {
            let regexUF = /A[CLMP]|BA|CE|ES|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|[GT]O/i;
            return regexUF.test(uf);
        }

        ufSelect.addEventListener("focusout",function ufSelected(){ 
            if (ufValidated) {
                document.querySelector('.errorUF').innerHTML = "";
            } else {
                document.querySelector('.errorUF').innerHTML = "Preencha uma unidade de UF válida!";
            }
            })
        
            if (ufValidated === true) {
                document.querySelector('.errorUF').innerHTML = "";
            }  
});


document.querySelector('form').addEventListener("click", function (e) {
    const camposEmail = document.querySelector('#email');
    const emailValue = camposEmail.value;
    const emailValidated = validaEmail(emailValue);

    function validaEmail() {
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        return regexEmail.test(emailValue)
    }
    
    camposEmail.addEventListener("focusout",function emailSelected(){ 
    if (emailValidated) {
        document.querySelector('.errorEmail').innerHTML = "";
    } else {
        document.querySelector('.errorEmail').innerHTML = "Verifique se o email é válido!";
    }
    })

    if (emailValidated === true) {
        document.querySelector('.errorEmail').innerHTML = "";
    }

});

document.querySelector('form').addEventListener("click", function (e) {
    const chaveCEP = this.querySelector('#cep');
    const cepValue = chaveCEP.value;
    const cepValueValidated = validaCEP(cepValue)

    function validaCEP() {
        const regexCEP = /^[0-9]{5}-[0-9]{3}$/;
        return regexCEP.test(cepValue)
    }

    chaveCEP.addEventListener("focusout",function cepSelected(){ 
        if (cepValueValidated) {
            document.querySelector('.errorCEP').innerHTML = "";
        } else {
            document.querySelector('.errorCEP').innerHTML = "Verifique se o CEP é válido!";
        }
        })
    
        if (cepValueValidated === true) {
            document.querySelector('.errorCEP').innerHTML = "";
        } 
});

document.querySelector("form").addEventListener('submit', e => {
        e.preventDefault();
})

