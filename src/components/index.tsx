import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [x, f] = useState(0)

    const req: VtecxApp.Entry[] = [
        {
            user: {
                name: 'baz',
                email: 'baz@com'
            },
            link: [
                {
                    "___href": "/foo/2",
                    "___rel": "self"
                }
            ]
        }
    ]

    const putdata = async () => {
        try {
            axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
            const res = await axios.put('/d/foo', req)
            alert(`res= ${res.data.feed.title} `);
        } catch (e) {
            alert('error')
            console.log(e)
        }
    }

    useEffect(() => {
        putdata()
    })

    return (
        <div>
            <button onClick={() => { f(x + 1) }}>
                {x} times
      </button>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('container'))
