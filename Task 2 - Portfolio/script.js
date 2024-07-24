// Example JavaScript for modal functionality
$(document).ready(function() {
    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Example: Handle project modal details
    $('.project-link').click(function(e) {
        e.preventDefault();
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
    });
});
