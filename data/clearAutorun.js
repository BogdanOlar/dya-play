
// Make sure we don't override the current onload function
if(window.onload) {
    var curronload = window.onload;
    var newonload = function() {
        curronload();
        clickOnAutoplay();
    };
    window.onload = newonload;
} else {
    window.onload = clickOnAutoplay;
}

function clickOnAutoplay(){
    var repetitiveClear = setInterval(
        function() {
            console.log("Bump.")
            var autoplayCheckbox = document.getElementById('autoplay-checkbox');
            if (autoplayCheckbox != null) {
                if (autoplayCheckbox.checked) {
                    autoplayCheckbox.click();
                } else {
                    clearInterval(repetitiveClear);
                    console.log("Exiting: checkbox already checked.")
                }
            }
        }
        , 5000
    );
};