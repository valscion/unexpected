/*global expect*/
describe('array type', function () {
    it('should find an array instance identical to itself', function () {
        var arr = [1, 2, 3];
        expect(arr, 'to equal', arr);
    });

    it('should inspect non-numerical properties', function () {
        var arr = [1, 2, 3];
        arr.foo = 'bar';
        arr.push(4);
        expect(arr, 'to inspect as', "[ 1, 2, 3, foo: 'bar', 4 ]");
    });

    it('should diff non-numerical properties', function () {
        var arr1 = [1, 2, 3];
        arr1.foo = 'bar';

        var arr2 = [1, 2, 3];
        arr1.foo = 'baz';

        expect(function () {
            expect(arr1, 'to equal', arr2);
        }, 'to throw',
            "expected [ 1, 2, 3, foo: 'bar' ] to equal [ 1, 2, 3, foo: 'baz' ]\n" +
            "\n" +
            "[\n" +
            "  1,\n" +
            "  2,\n" +
            "  3,\n" +
            "  foo: 'bar' // should be 'baz'\n" +
            "]"
        );
    });
});
