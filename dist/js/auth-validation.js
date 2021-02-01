function displayMenu(){
  	$('#menu').append('<li class="nav-item"><a href="./home.html" class="nav-link"><i class="nav-icon fas fa-home"></i><p>Inicio</p></a></li>'+
  		'<li class="nav-item" id="userBar" hidden><a href="./users.html" class="nav-link"><i class="nav-icon fas fa-users"></i><p>Usuarios</p></a></li>'+
  		'<li class="nav-item" id="li-campaigns"><a href="·" class="nav-link"><i class="nav-icon fas fa-bullhorn"></i>'+
  		'<p>Campañas<i style="font-size:20px;" class="right fas fa-angle-left"></i></p></a><ul class="nav nav-treeview">'+
  		'<li class="nav-item"><a href="campaign.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Campañas</p></a></li>'
      +'<li class="nav-item"><a href="campaignCreate.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Crear campaña</p></a></li>'
  		+'<li class="nav-item"><a href="campaignTemplates.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Plantillas de correo</p></a></li>'
  		+'<li class="nav-item"><a href="campaignHistory.html" class="nav-link"><i class="far fa-circle nav-icon"></i><p>Historial de ejecuciones</p></a></li></ul></li>'
  		+'<li class="nav-item"><a href="churn.html" class="nav-link"><i class="nav-icon fas fa-users-slash"></i><p>Churn</p></a></li>'
  		+'<li class="nav-item"><a href="churnRate.html" class="nav-link"><i class="nav-icon fas fa-percent"></i><p>Churn Rate</p></a></li>'
        +'<li class="nav-item"><a href="#" class="nav-link"><i class="nav-icon fas fa-chart-line"></i><p>Search Analytics</p></a></li>');
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
	  case 'userCreate':
	  case 'userEdit':
	  case 'users':
    	$("li > a[href='./users.html']")[0].style.backgroundColor = 'lightgrey';
	    break;
	  case 'churn':
    	$("li > a[href='churn.html']")[0].style.backgroundColor = 'lightgrey';
	    break;
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