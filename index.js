(() => {
  // output/Effect.Console/foreign.js
  var log = function(s) {
    return function() {
      console.log(s);
    };
  };

  // output/Main/index.js
  var main = function __do() {
    log("\u{1F35D}")();
    return log("You should add some tests.")();
  };

  // <stdin>
  main();
})();
