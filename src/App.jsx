const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <hr />
      <List />
      </div>
  ) ;
}

function Header() {
    return <h1>My Hacker Stories</h1>;
}

function Search() {
    return (
        <>
        <label className="search" htmlFor="search"></label>
        <input id="search" type="text" />
        </>
    ) ;
}

function List (){
    return (
        <ul>
            {list.map(function (item) {
                return (
                    <li key={item.objectID}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <span> {item.author}</span>
                        <span> {item.num_comments}</span>
                        <span> {item.points}</span>
                    </li>
                ) ;
            })}
        </ul>
    ) ;
}

/* Reflection
     - map(): Essential for rendering lists in React.
     - objectID: Best key, permanent unique ID.
     - When using real API, list will come from fetch() instead of hardcoded array.
*/

export default App;

