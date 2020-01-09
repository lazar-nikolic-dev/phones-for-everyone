let posting = $.post("/api/phones", { cena: [100, 300] });

// Put the results in a div
posting.done(function(data) {
    console.log(data);
});
