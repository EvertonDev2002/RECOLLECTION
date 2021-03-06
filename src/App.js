import React from "react"
import "./theme/theme.css"
import PageMain from "./pages/main/main.jsx"
import PageResult from "./pages/result/result.jsx"
import PageQuestions from "./pages/questions/questions.jsx"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default function App (){
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PageMain />
                </Route>
                <Route path="/questions">
                    <PageQuestions/>
                </Route>
                <Route path="/result">
                    <PageResult/>
                </Route>
            </Switch>
        </Router>      
    )
}