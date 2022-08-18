const React = require('react')
const Def = require('../default')

//Show Name, Pic, City, State, Available Cuisines
//Borrow styles from bootstrap, 
function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
              { data.place.pic}
            </div>
            <div>
              { data.place.city}
            </div>
            <div>
              { data.place.state}
            </div>
            <div>
              { data.place.cuisines}
            </div>
            <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>       
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>    
            </div>

            <section>
              <h2>Comments</h2>
            </section>
          </main>
        </Def>
    )
}

module.exports = show
