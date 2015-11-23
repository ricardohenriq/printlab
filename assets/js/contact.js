function stripTags(str){
    //return str.replace(/<\/?[^>]+>/gi, '');
    str = str.replace(/</gi, '&lt');
    str = str.replace(/>/gi, '&gt');
	return str;
}

function validateContactForm(formId){
	var formValues = $('#' + formId).serializeArray();
	
	for(var fieldIndex = 0; fieldIndex < formValues.length; fieldIndex++){
		formValues[fieldIndex]['value'] = stripTags(formValues[fieldIndex]['value']);
	}
	return formValues;
}

function createContactEmail(formValues){
	var body = '';
	for(var fieldIndex = 0; fieldIndex < formValues.length; fieldIndex++){
		body += '<strong>'+ formValues[fieldIndex]['name'] + 
			': </strong>' + formValues[fieldIndex]['value'] + '<br>';
	}
	return body;
}

function sendToMandrill(body, subject){
	$.ajax({
		type:"POST",
		url:"https://mandrillapp.com/api/1.0/messages/send.json",
		data:{
				'key':'Akj5sUZpdPZ7O3LbpPpSiw',
				'message':{
					'from_email':'ricardohenrique996@gmail.com',
					'to':[
						{
							'email':'ricardohenrique996@gmail.com',
							'name':'Ricardo Henrique',
							'type':'to'
						}
					],
					'subject':subject,
					'html':body
				}
			}
	});
}

function sendMail(formId, subject){
	var formValues = validateContactForm(formId);
	var body = createContactEmail(formValues);
	sendToMandrill(body, subject);
	alert('Email Enviado!');
}

$("#contactForm").validate({
	rules:{
		name:{
			required:true,
			minlength:20
		},
		phone:{
			required:true,
			minlength:8
		},
		message:{
			required:true,
			minlength:50
		},
		email:{
			required:true,
			email:true
		}
	},
	messages:{
		name:{
			required:"Por favor insira seu nome.",
			minlength:"Nome deve conter no mínimo 20 caracteres."
		},
		phone:{
			required:"Por favor insira seu telefone valido.",
			minlength:"Telefone deve conter no mínimo 8 caracteres."
		},
		message:{
			required:"Por favor insira uma descrição com o que deseja tratar.",
			minlength:"Mensagem deve conter no mínimo 50 caracteres."
		},
		email:{
			required:"Por favor insira um email para retorno.",
			email:"Por favor insira um email válido."
		}
	},
	errorClass:'help-block text-danger',
	errorElement:'p',
	submitHandler:function(){
		sendMail('contactForm', '[Contato] |Print Site|');
		return false;
	}
});