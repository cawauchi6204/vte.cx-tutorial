import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [x, f] = useState(0)

    const getdata = async () => {
        try {
            axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
            const res = await axios.get('/d/foo/1?e')
            alert(`res=${res.data.title}`);
        } catch (e) {
            alert('error')
            console.log(e)
        }
    }

    useEffect(() => {
        getdata()
    })
    return (
        <div>
            <button onClick={() => { f(x + 1) }}>{x} times</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('container'))
