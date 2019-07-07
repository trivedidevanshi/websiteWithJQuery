$(document).ready(function () {

    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function (event) {
        event.preventDefault();
        var item = $("#todo-list-item").val();
        if (item) {
            if (item.toLowerCase() == "dance") {
                $("#list-items").append(
                    "<li><input class='checkbox' type='checkbox'/><img src='assets/images/dance.png' alt='dancing' class='centerImage'><a class='remove'>x</a><hr></li>"
                );
                localStorage.setItem("listItems", $("#list-items").html());
                $("#todo-list-item").val("");

            } else {

                $("#list-items").append(
                    "<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>"
                );
                localStorage.setItem("listItems", $("#list-items").html());
                $("#todo-list-item").val("");
            }
        }
    });

    $(document).on("change", ".checkbox", function () {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            $(this).siblings().attr('src', 'assets/images/dance.png');
        } else {
            $(this).attr("checked", "checked");
            $(this).siblings().attr('src', 'assets/images/danceChecked.png');
        }
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
    });

    $(document).on("click", ".remove", function () {
        $(this).parent().fadeOut("slow", function () {
            $(this).parent().remove;
            localStorage.setItem("listItems", $("#list-items").html());
        })
    });

});