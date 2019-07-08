$(document).ready(function () {
    $.ajax({
        url: "https://api.myjson.com/bins/2sadq?pretty=1",
        dataType: "json",
        success: function (response) {
            $.each(response.apartments, function (i, apartment) {
                var listingClassname = apartment.city.toLowerCase().replace(" ", "-");
                var listing = "<a href='#' id=" + apartment.id + " class='list-group-item listings " + listingClassname + " '><h4 class='list-group-item-heading'>" + apartment.description + " /" + apartment.bedrooms + " BR /" + apartment.price + "</h4><p>" + apartment.neighborhood + "</p></a>"
                $(".apartments").append(listing);
            });
        },
        error: function (error) {
            console.log(error);
        }
    });

    $(".filter").click(function () {
        $(".filter").removeClass("active");
        $(this).addClass("active");
        var city = $(this).attr("id");
        $(".listings").show();
        if (city !== "all")
            $(".listings").not("." + city).css("display", "none");
    });

    $(document).on("click", ".listings", function () {
        var id = $(this).attr("id");

        $.ajax({
            url: "https://api.myjson.com/bins/2sadq?pretty=1",
            dataType: "json",
            success: function (response) {
                var selectedApartment = $.grep(response.apartments, function (apartment) {
                    return apartment.id == id;
                })

                var address = selectedApartment[0].address;
                window.open("https://www.google.com/maps/search/?api=1&query=" + address);
            },
            error: function (error) {
                console.log(error);
            }
        });

    });
});