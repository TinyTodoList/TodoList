 angular.module("dotoFilters", [])
 .filter("alreadyDone", function () {
            return function (items, done) {
                var resultArr = [];
                angular.forEach(items, function (item) {

                    if (item.done == done ) {
                        resultArr.push(item);
                    }
                });
                return resultArr;
            }
        });
