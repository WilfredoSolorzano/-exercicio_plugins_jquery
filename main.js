$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000'); 
    $('#cpf').mask('000.000.000-00'); 
    
    $('form').validate({
    rules:{
        nome: {
            required:true
        },
        email: {
            required:true,
            email:true
        },
        telefone: {
            required:true
        },
        cpf: {
            required:true
        },
        endereco: {
            required:true
        },
        cep: {
            required:true
        },
        mensagem: {
            required: true
        },
        veiculoDeInterese:{
            required: false
        }
    },
    messages:{
        nome: "Por favor, insira o seu nome"
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento,validador){
        let camposIncorrectos = validador.numberOfInvalids();
        if(camposIncorrectos){
            alert(`existen ${camposIncorrectos} campos`)
        }
    }
})
})