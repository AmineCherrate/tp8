import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
}
from 'react-router-dom'

import Layout from './composants/Template/Layout';
import Apropos from './composants/pages/Apropos';
import Arcicles from './composants/pages/Articles';
import { Home } from './composants/composants';
import Article from './composants/pages/Article';
export default () => (

    <Router>
            <Switch>
                <Redirect from="/" exact to="/Home"/>

                    <Route path='/Home' exact component={()=><Layout> <Home/> </Layout>} />
                    <Route path='/a-propos-de-nous' exact component={()=><Layout> <Apropos/> </Layout>} />
                    <Route path='/articles' exact component={()=><Layout> <Arcicles/> </Layout>} />
                    <Route path='/article/:id' exact component={(props)=><Layout> <Article articleId={props.match.params.id}/> </Layout>} />


                    <Route render={() => (
                            <Layout>
                                    <h1>ERREUR404</h1>
                                    <p>La page que vous demandez est introuvable</p>
                            </Layout>

                                        )}/>

            </Switch>
    </Router>




)

