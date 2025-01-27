const multiply = (a, b) => {
  return a * b;
};
multiply(3, 3);

const placeholderData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

// can't use asyn/ await functions at top level in a JS file so using a main function that is async is a simple way to ensure you can use async/ await
async function main() {
  const posts = await placeholderData();
  console.log("Posts", posts);
}
main();
