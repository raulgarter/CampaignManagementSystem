function notificationFunction(text, iconType) {
    var Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    $(function() {
      Toast.fire({
        icon: iconType,
        title: '&nbsp' + text
      })
    })
}