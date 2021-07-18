import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../src/index'

const Test: React.FunctionComponent = () => {
  return (
    <App/>
  )
}

const App = () => {
  return (
    <Form name="Test" method="POST" style={{display: 'flex', flexDirection: 'column'}}>
      <input id="test1" placeholder="Type your name"/>
      <input id="test2" placeholder="Type your age"/>
      <input id="test3" placeholder="Type your birthplace"/>
      <button type="submit">
        Send data
      </button>
    </Form>
  )
}

ReactDOM.render(<Test/>, document.getElementById('root'))