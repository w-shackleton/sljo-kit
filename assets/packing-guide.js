"use strict";

document.addEventListener("DOMContentLoaded", function() {
    for (const radio of document.packingguide.gig) {
        radio.addEventListener("change", function() {
            setDefaults(this.value);
        });
    }

    setDefaults('full');
});

function setDefaults(value) {
    const form = document.packingguide;
    const fields = [
        form.alto1,
        form.alto2,
        form.tenor1,
        form.tenor2,
        form.bari,
        form.clarinet,
        form.tpt1,
        form.tpt2,
        form.tpt3,
        form.tpt4,
        form.tbn1,
        form.tbn2,
        form.tbn3,
        form.tbn4,
    ];

    for (const field of fields) {
        switch(value) {
            case 'full':
                field.value = field.dataset.fullband;
                break;
            case 'mini':
                field.value = "1";
                break;
        }
    }
}
