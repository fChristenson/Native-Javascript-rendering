const otherLogMe = str => {
  console.log(str);
  console.log("--------------------------");
};

console.log("new");
console.log("--------------------------");
console.time();
const otherItems = ["foo", "bar", "baz"];

const OtherMyLi = str => {
  return `<li onclick="otherLogMe('${str}')">
    <h1>${str}</h1>
    <p>This is a element</p>
  </li>`;
};

const MyUl = items => {
  return `<ul>${items.join("")}</ul>`;
};

const otherLiArray = otherItems.map(str => OtherMyLi(str));
const otherUl = MyUl(otherLiArray);

const bar = document.getElementById("bar");
bar.insertAdjacentHTML("beforeend", otherUl);
console.timeEnd();
