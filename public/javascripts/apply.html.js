function validateForm() {
    var form = document.forms["form"];
    for (var i = 0; i < form.length; i++) {
        var target = form[i].value;
        if (target == "") {
            alert("빈칸을 채워주세요.");
            return false;
        }
    }
}