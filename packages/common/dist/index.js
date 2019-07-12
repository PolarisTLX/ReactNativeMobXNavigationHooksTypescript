"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
exports.App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(react_native_1.StatusBar, { barStyle: "dark-content" }),
        react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.Text, { style: { alignSelf: 'center', marginTop: 100, fontSize: 32 } }, count),
            react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } }))));
};
var styles = react_native_1.StyleSheet.create({
    scrollView: {
        backgroundColor: NewAppScreen_1.Colors.lighter,
    },
    body: {
        backgroundColor: NewAppScreen_1.Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: NewAppScreen_1.Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: NewAppScreen_1.Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});
