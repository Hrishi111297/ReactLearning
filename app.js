
// const heading=document.createElement("h1");
// heading.innerHTML="Hello from Basic javascrpt";
// const root=document.getElementById("root");
// root.append(heading);


// const heading=React.createElement("h1",{id:"yes"},"HelloWorld From React");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const heading=React.createElement("div",{id:"yes"},
[React.createElement("h1",{id:"no"},"HelloWorld From React1"),React.createElement("h1",{id:"f"},"HelloWorld From React2")]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);