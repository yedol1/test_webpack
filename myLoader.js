module.exports = function myLoader(item) {
    console.log("hello");
    return item.replace("console.log(", "alert(");
};
