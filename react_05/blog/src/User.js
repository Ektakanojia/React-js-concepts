export  default function User() {
  let data ="Ekta kanojia"
  function apple(){
    data="Kanojia ekta"
    alert(data)
  }
  return (
    <div>
      <h1>Click event and function in react js</h1>
      <h2>
        we will make button define a click event call a function some time
        function called without clicking on the event next we will take a
        variable inside the functional component
      </h2>
      <h3>{data}</h3>
      <button onClick={apple}>Click me</button>
    </div>
  );
}
