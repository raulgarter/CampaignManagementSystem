function displayMenu(){
  	$('#menu').append('<li class="nav-item"><a href="./home.html" class="nav-link"><i class="nav-icon fas fa-home"></i><p>Inicio</p></a></li>'+
  		'<li class="nav-item" id="userBar" hidden><a href="./users.html" class="nav-link"><i class="nav-icon fas fa-users"></i><p>Usuarios</p></a></li>'+
  		'<li class="nav-item" id="li-campaigns"><a href="·" class="nav-link"><i class="nav-icon fas fa-bullhorn"></i>'+
  		'<p>Campañas<i style="font-size:20px;" class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">'+
  		'<li class="nav-item"><a href="campaign.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Campañas</p></a></li>'
      	+'<li class="nav-item"><a href="campaignCreate.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Crear campaña</p></a></li>'
  		+'<li class="nav-item"><a href="campaignTemplates.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Plantillas de correo</p></a></li>'
  		+'<li class="nav-item"><a href="event.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Seguimiento de correos</p></a></li>'
  		+'<li class="nav-item"><a href="campaignHistory.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Historial de ejecuciones</p></a></li></ul></li>'
  		// +'<li class="nav-item"><a href="churn.html" class="nav-link"><i class="nav-icon fas fa-users-slash"></i><p>Churn</p></a></li>'
  		+'<li class="nav-item"><a href="churnRate.html" class="nav-link"><i class="nav-icon fas fa-users-slash"></i><p>Churn Rate</p></a></li>'
      +'<li class="nav-item" id="li-campaigns"><a href="·" class="nav-link"><i class="nav-icon fas fa-chart-line"></i>'
      +'<p>Search Analytics<i style="font-size:20px;" class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">'
        +'<li class="nav-item"><a href="https://54.162.61.66/#/answer/" target="_blank" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Search</p></a></li>'
        +'<li class="nav-item"><a href="https://54.162.61.66/#/embed/viz/799db240-a7be-4314-ac9f-43b6587e80e0/" target="_blank" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Ingresos y egresos</p></a></li>'
        +'<li class="nav-item"><a href="https://54.162.61.66/#/embed/viz/4457aeb1-8570-4ba8-92c9-ef502c21d51d/" target="_blank" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Operaciones y estrategia</p></a></li>'
        +'<li class="nav-item"><a href="https://54.162.61.66/#/embed/viz/814ccd76-d66b-4d52-908d-59b2724dfc17/" target="_blank" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Campañas</p></a></li></ul></li>');
}

function setActiveItem(page){
	switch(page) {
	  case 'campaignConsult':
	  case 'campaignEdit':
	  case 'campaign': 
	    $('#li-campaigns').addClass('menu-open');
    	$("li > a[href='campaign.html']").addClass('active');
	    break;
	  case 'campaignCreate':
	    $('#li-campaigns').addClass('menu-open');
    	$("li > a[href='campaignCreate.html']").addClass('active');
	    break;
    case 'campaignTemplates':
      $('#li-campaigns').addClass('menu-open');
      $("li > a[href='campaignTemplates.html']").addClass('active');
      break;
	  case 'campaignHistory':
	    $('#li-campaigns').addClass('menu-open');
	  	$("li > a[href='campaignHistory.html']").addClass('active');
	  	break;
	  case 'event':
	    $('#li-campaigns').addClass('menu-open');
	  	$("li > a[href='event.html']").addClass('active');
	  	break;
	  case 'userCreate':
	  case 'userEdit':
	  case 'users':
    	$("li > a[href='./users.html']")[0].style.backgroundColor = 'lightgrey';
	    break;
	//   case 'churn':
    // 	$("li > a[href='churn.html']")[0].style.backgroundColor = 'lightgrey';
	//     break;
	  case 'churnRate':
    	$("li > a[href='churnRate.html']")[0].style.backgroundColor = 'lightgrey';
	    break;
	  case 'home':
    	$("li > a[href='./home.html']")[0].style.backgroundColor = 'lightgrey';
	    break;
	  default:
	    // code block
	}
}

  var activeSession = JSON.parse(localStorage.getItem("sessionInformation"));
  if (activeSession == null) {
    localStorage.setItem("infoMessage", 'Active');
    window.location.href = "../../index.html";
  }

function validateRole(page){
  fetch('https://cms-web-portal-experience-api.us-e1.cloudhub.io/api/users/' + activeSession.username)
  .then( 
    response => { 
      response.json().then(
        data => {
          var usuario = data[0];
          if (usuario.user_role == 'Administrador'){
            displayMenu();
          	var userBar = $("#userBar");
            userBar.removeAttr('hidden');
          } else {
          	displayMenu();
          }
          setActiveItem(page);
      })
    }
  )
}