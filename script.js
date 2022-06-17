document.querySelector("#file-upload").onchange = function () {
    document.querySelector("#file-name").textContent = this.files[0].name;
}

$(document).ready(function() {
    $('input[type="file"]').change(function(e) {
        var fileUpload = e.target.files[0].name;
        $("h4").text(fileUpload);

    });
});