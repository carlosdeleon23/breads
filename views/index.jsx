const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title})  {
    return (
      <Default title={title}>
        <Default>
  <h2>Index Page</h2>
  {/* This is a JSX comment. */}
  {/* <p>I have {breads[0].name} bread!</p> */} 
</Default>
    <ul>
        {
            breads.map((bread, index)=> {
                return (
                <li key={index}>
                    <a href={`/breads/${index}`}>
                    {bread.name}
                    </a>
                </li>)
            })
        }
    </ul>
      </Default>
    )
}

module.exports = Index
