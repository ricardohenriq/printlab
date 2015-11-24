var objectsQuantity = '';
var detailsLevel = '';
var materials = '';
var delivery = '';

$(document).ready(function(){
    $.getJSON('assets/json/objects-quantity.json',function(data){
		objectsQuantity = data;
		completeSelect(data, '#objects-quantity');
	});
	$.getJSON('assets/json/details-level.json',function(data){
		detailsLevel = data;
		completeSelect(data, '#details-level');
	});
	$.getJSON('assets/json/materials.json',function(data){
		materials = data;
		completeSelect(data, '#material');
	});
	$.getJSON('assets/json/delivery.json',function(data){
		delivery = data;
		completeSelect(data, '#delivery');
	});
});

$('#dimensions').mask('99Cm X 99Cm X 99Cm');

function completeSelect(data, selectID){
	for (var i = 0; i < data.length; i++) {
		$(selectID).append('<option value=\'' + data[i]['value'] + '\'>' + data[i]['label'] + '</option>');
	}
}

$('#calc-pre-budget').click(function(){
	var formValues = getValuesFromBudgetForm('#pre-budget-form :input');
	var preBudget = calcPreBudget(formValues);
	$('#pre-orcamento').attr('value', preBudget);
	return false;
});

function getValuesFromBudgetForm(fieldId){
	var formValues = [];
	$(fieldId).each(function(){
		if(['INPUT', 'SELECT'].indexOf($(this).context.tagName) >= 0){
			formValues[$(this).context.id] = $(this).context.value;
		}
	});
	return formValues;
}

function calcPreBudget(variables){
	return variables['objects-quantity'] * variables['details-level'] 
	* variables['material'] * variables['delivery'] * variables['weight']
	* 3;
}

$('#calc-pre-budget-send-message').click(function(){
	var formValues = getValuesFromBudgetForm('#pre-budget-form :input');
	formValues['preBudget'] = calcPreBudget(formValues);
	$('#pre-orcamento').attr('value', formValues['preBudget']);
	var prettyArray = prettyFormatArray(formValues);
	var formValuesSerilized = createUrlParams(prettyArray);
	redirect('http://localhost/PROJETOS/PrintLab/contato.html?', formValuesSerilized);
	return false;
});

function prettyFormatArray(unFormatedArray){
	var prettyArray = [];
	prettyArray['Quantidade'] = findInJson(objectsQuantity, 'value', unFormatedArray['objects-quantity'], 'label');
	prettyArray['Nível de Detalhes'] = findInJson(detailsLevel, 'value', unFormatedArray['details-level'], 'label');
	prettyArray['Material'] = findInJson(material, 'value', unFormatedArray['material'], 'label');
	prettyArray['Prazo de Entrega'] = findInJson(delivery, 'value', unFormatedArray['delivery'], 'label');
	prettyArray['Pré Orçamento'] = 'R$ ' + unFormatedArray['preBudget'];
	prettyArray['Peso'] = unFormatedArray['weight'] + ' Kg';
	prettyArray['Dimensoes'] = unFormatedArray['dimensions'];
	return prettyArray;
}

function createUrlParams(prettyArray){
	var params = "";
	for(var key in prettyArray){
		if(params != ''){
			params += '&';
		}
		params += encodeURIComponent(key) + '=' + encodeURIComponent(prettyArray[key]);
	}
	return params;
}

function findInJson(json, prop, value, returnProp){
	for(var i = 0; json.length; i++){
		if(json[i][prop] == value){
			return json[i][returnProp];
		}
	}
}

function redirect(url, getData){
    location = url + getData;
}