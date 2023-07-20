//your JS code here. If required.
let colorSelect = document.getElementById('colorSelect');
    let button = document.querySelector('input[type="button"]');

    button.addEventListener('click', function() {
        colorSelect.remove(colorSelect.selectedIndex);
    });

