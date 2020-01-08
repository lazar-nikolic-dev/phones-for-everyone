let posting = $.post("/api/index.php", { cena: [100, 300] });

// Put the results in a div
posting.done(function(data) {
  console.log(data);
});
