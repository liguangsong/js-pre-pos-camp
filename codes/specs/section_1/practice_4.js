describe('practice-1-4', function () {

    var collection_a = [{key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}];
    var collection_b = {value: ["a", "d", "e", "f"]};

    it("选出A集合中与B集合中相同的元素", function () {
        var result = collect_same_elements(collection_a, collection_b);

        expect(result).toBe(["a", "e", "f", "d"]);
    });


});

