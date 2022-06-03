
<script src='<?php echo base_url(); ?>assets/js/main.js'></script>
<link href='<?php echo base_url(); ?>assets/css/main.css' rel='stylesheet' />
<script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });

</script>
<div class="content-wrapper">
    <div class="content">
      <div class="container-fluid">
        <div id='calendar'></div>
      </div>
    </div>
</div>