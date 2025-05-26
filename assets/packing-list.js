"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(document.location.search);

    switch (params.get("gig")) {
        case null:
        case "full":
            document.body.classList.add("gig-full");
            break;
        case "mini":
            document.body.classList.add("gig-mini");
            break;
    }

    switch (params.get("venue")) {
        case null:
        case "small":
            document.body.classList.add("venue-small");
            break;
        case "outdoor":
        case "big":
            document.body.classList.add("venue-big");
            break;
    }

    switch (params.get("vocal")) {
        case null:
            document.body.classList.add("vocal-no");
            break;
        case "yes":
            document.body.classList.add("vocal-yes");
            break;
    }

    switch (params.get("electric")) {
        case null:
            document.body.classList.add("electric-no");
            break;
        case "yes":
            document.body.classList.add("electric-yes");
            break;
    }

    switch (params.get("lights")) {
        case null:
            document.body.classList.add("lights-no");
            break;
        case "yes":
            document.body.classList.add("lights-yes");
            break;
    }

    for (const d of document.querySelectorAll("details")) {
        const sty = window.getComputedStyle(d);
        if (sty.getPropertyValue("--closed-by-default") == 1) {
            d.removeAttribute("open");
        }
    }
});

