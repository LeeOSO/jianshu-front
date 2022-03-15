import React from "react";
import Header from "./common/header";
import Provider from "react-redux/lib/components/Provider";
import store from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
    return (
        //将store提供给子组件
        <Provider store={store}>
            <BrowserRouter>
                {/*使用Link组件必须放在内部*/}
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/detail' element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
