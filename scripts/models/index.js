var Partisan;
(function (Partisan) {
    var Models;
    (function (Models) {
        var Index = (function () {
            function Index(header, contentType) {
                this.contentType = contentType || "aboutus";
                this.header = header || "No header has been set.";
            }
            return Index;
        })();
        Models.Index = Index;
    })(Models = Partisan.Models || (Partisan.Models = {}));
})(Partisan || (Partisan = {}));
