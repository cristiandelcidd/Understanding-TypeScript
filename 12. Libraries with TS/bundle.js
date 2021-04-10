System.register("app", ["lodash"], function (exports_1, context_1) {
    "use strict";
    var lodash_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {
            console.log(lodash_1.default.shuffle([1, 2, 3]));
            console.log(GLOBAL);
        }
    };
});
//# sourceMappingURL=bundle.js.map