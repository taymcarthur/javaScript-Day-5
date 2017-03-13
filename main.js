
$(document).ready(function(){
	$.getJSON('http://json-data.hereokuapp.com/forms', function(formData){
		//ALL CODE GOES HERE
		//FORMDATA VARIABLE INCLUDES ALL OF THE FORM INFORMATION YOU NEED
//How to insert variable into string: with nopostrophies `${asdk}`

		var formHTML = ''

		formData.forEach(function(field){
			formHTML += `<i class="fa${field.icon} input type=${field.type} placeholder=${field.label} id=${field.id} />`
		})

		$(".form").html(formHTML)




	})
})
