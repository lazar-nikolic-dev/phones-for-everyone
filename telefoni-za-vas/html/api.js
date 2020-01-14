let dataModel = {
    cena: [],
    brend: [],
    os: [],
    ekran: [],
    kamera: [],
    procesor: [],
    memorija: [],
    baterija: []
};

let rangeProps = ["cena", "kamera", "baterija"];

$("input[type=checkbox]").change(function() {
    if (this.checked) {
        addPropertyValue(this.id, this.className);
        let posting = $.post(
            "/api/phones",
            JSON.stringify(dataModel, function(key, value) {
                if (typeof value !== "undefined" && value.length === 0) {
                    return undefined;
                }

                return value;
            })
        );
        posting.done(function(data) {
            refreshPhones(data);
        });
    }
});

function addPropertyValue(id, className) {
    if (data[className][id] != null) {
        dataModel[className].push(data[className][id]);
    }
}

function refreshPhones(data) {
    $(".row").empty();
    data.forEach(element => {
        addPhoneElement(element["cena"], element["ime"], element["slika"]);
    });
}

function addPhoneElement(cena, model, slika) {
    column = $('<div class="column"/>');
    card = $('<div class="card"/>');
    cena = $("<p>Cena: " + cena + "</p>");
    model = $("<p>Model: " + model + "</p>");
    img = $("<img />").attr({
        src: slika,
        alt: "JSFiddle logo",
        title: "JSFiddle logo",
        width: 120,
        height: 120
    });
    img.appendTo(card);
    cena.appendTo(card);
    model.appendTo(card);
    card.appendTo(column);
    column.appendTo(".row");
}
