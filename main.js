$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){ 
	//this creates a function with an api link to grab from which is called with the variable you placed in after the function.	  
    var formHTML = "" //this creates an empty string which is then replaced with whatever you put in it in the function below
	
    formData.forEach(function(field){
      if(field.type === 'text' || field.type ==='email' || field.type === 'tel') {
      	formHTML += `<i class="fa ${field.icon}" aria-hidden="true"></i><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
      }

      if (field.type === 'select') {
    	formHTML += `<select id="${field.id}">
    	<option value=''>${field.label}</option>`

    	field.options.forEach(function(option) {
    		formHTML += `<option value="${option.value}">${option.label}</option>`
    	})

    	formHTML += '</select>'
    }

    if (field.type === 'textarea') {
    	formHTML += `<i class="fa ${field.icon}" aria-hidden="true"></i><textarea id="${field.id}" placeholder="${field.label}"></textarea>`
    }

   })

   $("#app").html(formHTML)
   })
})



//       	formHTML += `<i class="fa ${field.icon}"><textarea placeholder="${field.label}"></textarea>`
//       } else if (field.type === 'text' || field.type ==='email' || field.type === 'tel') {
//       	formHTML += `<i class="fa ${field.icon}"><input placeholder="${field.label}"></input>
//       }else if(field.type ==='select'){  
//         formHTML += `<select form='${field.id}'>
//         <option selected="selected">${field.label}...</option>`
//         field.options.forEach(function(lang){
//           formHTML += `<option value="${lang.value}">${lang.label}</option>`
//           })
//       }	else {
//       formHTML += `<i class="fa ${field.icon}"><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
//       }
//   			 //so this uses the callback with the forEach function to loop through the array - then you throw another variable in it to call to loop through the data - then formHTML =+ `` then replaces the empty string you created with whatever you put in the nopostrophes. then whatever goes in ${}. ie field.label goes through the data and finds label and returns that data
// 		})
// 	$("#app").html(formHTML)
// 	})
// })
