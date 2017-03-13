$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){
    //ALL CODE GOES HERE
    //FORMDATA VARIABLE INCLUDES ALL OF THE FORM INFORMATION YOU NEED
    //How to insert variable into string: with nopostrophies `${asdk}

    var formHTML = ''

    formData.forEach(function(field){
      formHTML += `<i class="fa ${field.icon}"><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    })

    $(".form").html(formHTML)
  })


// })
// function createTable()
// {
//     var num_rows = document.getElementById('rows').value;
//     var num_cols = document.getElementById('cols').value;
//     var theader = '<table border="1">\n';
//     var tbody = '';

//     for( var i=0; i<num_rows;i++)
//     {
//         tbody += '<tr>';
//         for( var j=0; j<num_cols;j++)
//         {
//             tbody += '<td>';
//             tbody += 'Cell ' + i + ',' + j;
//             tbody += '</td>'
//         }
//         tbody += '</tr>\n';
//     }
//     var tfooter = '</table>';
//     document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
// }
// </script>
// </head>

// <body>
// <form name="tablegen">
// <label>Rows: <input type="text" name="rows" id="rows"/></label><br />
// <label>Cols: <input type="text" name="cols" id="cols"/></label><br/>
// <input name="generate" type="button" value="Create Table!" onclick='createTable();'/>
// </form>

// <div id="wrapper"></div>
