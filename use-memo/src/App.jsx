import './App.css'
// import BasicUseMemo from './components/BasicUseMemo'
import CodePost from './components/CodePost'

function App() {

  const posts = [
    {
      slug: "html-desde-0",
      date: "Fri Oct 06 2023 10:45:00 GMT+0200(Central European Summer Time)",
      data: "Lorem Ipsum"
    },
    {
      slug: "css-desde-0",
      date: "Thu Feb 17 2022 18:15:00 GMT+0200(Central European Standard Time)",
      data: "Lorem Ipsum"
    },
    {
      slug: "javascript-desde-0",
      date: "Tue Aug 23 2022 11:03:00 GMT+0200(Central European Summer Time)",
      data: "Lorem Ipsum"
    },
    {
      slug: "react-desde-0",
      date: "Wed Sept 13 2023 09:06:00 GMT+0200(Central European Summer Time)",
      data: "Lorem Ipsum"
    },
    {
      slug: "node-desde-0",
      date: "Sat Jan 06 2023 10:45:00 GMT+0200(Central European Standard Time)",
      data: "Lorem Ipsum"
    },
  ]

  return (
    <div className="App">
      {/* <BasicUseMemo /> */}
      <CodePost posts={posts}/>
    </div>
  )
}

export default App
