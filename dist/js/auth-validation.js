
  var activeSession = JSON.parse(localStorage.getItem("sessionInformation"));
  if (activeSession == null) {
    localStorage.setItem("infoMessage", 'Active');
    window.location.href = "../../index.html";
  }

  fetch('https://cms-web-portal-experience-api.us-e1.cloudhub.io/api/users/' + activeSession.username)
  .then( 
    response => { 
      response.json().then(
        data => {
          var usuario = data[0];
          var userBar = $("#userBar");
          if (usuario.user_role == 'Administrador'){
            userBar.removeAttr('hidden');
          } else {
            userBar.attr("hidden", true);
          }
      })
    }
  )
