import React, {Component} from 'react'
import Header from './components/Header'
import Addtodo from './components/Addtodo'
import ListTodos from './components/ListTodos'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
    render() {
      return (
        <Provider store={store}>
            <div className="container_main">
                <div className="container_app">
                    <br/>
                    <Header />
                    <br/>
                    <Addtodo />
                    <ListTodos />
                </div>
            </div>
        </Provider>
      );
    }
  }
export default App

