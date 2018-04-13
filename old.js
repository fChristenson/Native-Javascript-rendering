const logMe = str => {
  console.log(str);
  console.log("--------------------------");
};

const makeElement = type => content => {
  const el = document.createElement(type);
  if (typeof content === "string") {
    el.innerHTML = content;
  } else if (typeof content === "object" && Array.isArray(content)) {
    for (const item of content) {
      el.appendChild(item);
    }
  } else if (typeof content === "object") {
    el.appendChild(item);
  }

  return el;
};

const ul = makeElement("ul");
const li = makeElement("li");
const h1 = makeElement("h1");
const p = makeElement("p");

console.log("old");
console.log("--------------------------");
console.time();
const items = ["foo", "bar", "baz"];

const MyLi = str => {
  const header = h1(str);
  const para = p("This is a element");
  const item = li([header, para]);
  item.onclick = () => logMe(str);
  return item;
};

const liArray = items.map(MyLi);

const list = ul(liArray);

const foo = document.getElementById("foo");
foo.appendChild(list);
console.timeEnd();
