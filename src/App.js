// /** @import libraries here */
import { useState, useEffect } from "react";
import { getapiCall } from "./helpers/apicalls";

function App() {
  let offset = 0;
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  // console.log(data)
  /**
   * -------------------------------------------------------------------------------------------------------
   * get pokemon data 
   * -------------------------------------------------------------------------------------------------------
   */
  async function getData() {
    const result = await getapiCall(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`, 'GET');
    const newData = [];
    result.forEach((element) => {
      newData.push(element);
    });

    setData((oldData) => [...oldData, ...newData]);
  }
  /**
   * -------------------------------------------------------------------------------------------------------
   * handle scroll
   * -------------------------------------------------------------------------------------------------------
   */
  async function handleScroll(e) {
    console.log("hellloo");
    console.log("top : " + e.target.documentElement.scrollTop);
    console.log("Height : " + e.target.documentElement.scrollHeight);
    console.log("Window : " + window.innerHeight);
    const win = window.innerHeight;
    const top = e.target.documentElement.scrollTop;
    const height = e.target.documentElement.scrollHeight;
    if (win + top + 1 >= height) {
      console.log("at the bottom");
      offset += 20;
      getData();
      console.log("++++new data");
      console.log(offset);
      console.log(data.length);
      console.log("++++new data");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <th>Index</th>
            <th>Namew</th>
            <th>Country</th>
            <th>Nmae</th>
            <th>Namew</th>
            <th>Country</th>
          </tr>
          {data.map((a, index) => (
            <tr>
              <td>{index}</td>
              <td>{a.name}</td>
              <td>{a.url}</td>
              <td>{a.name}</td>
              <td>{a.name}</td>
              <td>{a.url}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
