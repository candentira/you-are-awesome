// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {
    var magicObject = () => {};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};
const incrementor = () => {
    this.count = this.count || 0;
    let self = this;
    increment = () => {
        self.count++;
        return increment;
    };
    increment.valueOf = () => self.count;

    return increment();
};
const asyncIncrementor = () => {};
const createIncrementer = () => {
    function* generator() {
        let i = 1;
        while(true) {
            yield i++;
        }        
    }

    return generator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => ({});
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;