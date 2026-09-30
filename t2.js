`use strict`;
const arr = [true, 5, "spider", -500, 6.5, false, "mouse", 900, 145.78, "person", "game", true, false]
const obj = {
    Boolean:0,
    String:0,
    Number:0
};
for(let i = 0; i < arr.length; i++){
    console.log(typeof arr[i]);
}
