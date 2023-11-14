// Toggle Sidebar
document.getElementById('navbarNav').addEventListener('hidden.bs.collapse', function () {
    document.getElementById('sidebarCollapse').classList.add('collapsed');
});

document.getElementById('navbarNav').addEventListener('shown.bs.collapse', function () {
    document.getElementById('sidebarCollapse').classList.remove('collapsed');
});

document.getElementById('sidebarCollapse').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    var footer = document.getElementById('footer');
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
    footer.classList.toggle('collapsed');
});

// Toggle Mic
$(document).ready(function() {
    $('#toggleMicButton').click(function() {
      var micIcon = $(this).find('i');
      if (micIcon.hasClass('fa-microphone')) {
        micIcon.removeClass('fa-microphone').addClass('fa-microphone-slash');
      } else {
        micIcon.removeClass('fa-microphone-slash').addClass('fa-microphone');
      }
    });
  });

// Toggle Headphones
$(document).ready(function() {
  $('#toggleHeadphonesButton').click(function() {
    var micIcon = $(this).find('i');
    if (micIcon.hasClass('fa-headphones')) {
      micIcon.removeClass('fa-headphones').addClass('fa-headphones-slash');
    } else {
      micIcon.removeClass('fa-headphones-slash').addClass('fa-headphones');
    }
  });
});

