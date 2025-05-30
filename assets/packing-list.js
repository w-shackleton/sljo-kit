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
            document.body.classList.add("venue-outdoor");
            break;
        case "big":
            document.body.classList.add("venue-big");
            break;
    }

    const toggles = ["vocal", "electric", "lights", "payments", "promo"];

    for (const toggle of toggles) {
        switch (params.get(toggle)) {
            case null:
                document.body.classList.add(`${toggle}-no`);
                break;
            case "yes":
                document.body.classList.add(`${toggle}-yes`);
                break;
        }
    }

    for (const d of document.querySelectorAll("details")) {
        const sty = window.getComputedStyle(d);
        if (sty.getPropertyValue("--closed-by-default") == 1) {
            d.removeAttribute("open");
        }
    }

    for (const standCounter of document.querySelectorAll('.stand-count')) {
        const parts = standCounter.dataset.parts.split(' ');
        let count = 0;
        for (const part of parts) {
            const musicianCount = params.get(part) ?? 1;
            count += Math.ceil(musicianCount / 2);
        }
        standCounter.innerHTML = count;
    }

    for (const musicianCounter of document.querySelectorAll('.musician-count')) {
        const parts = musicianCounter.dataset.parts.split(' ');
        let count = 0;
        for (const part of parts) {
            const musicianCount = params.get(part) ?? 1;
            count += parseInt(musicianCount);
        }
        musicianCounter.innerHTML = count;
    }
});

