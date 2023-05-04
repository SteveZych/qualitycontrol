import AddReagentForm from "../components/addReagentForm";
import {Auth, API, graphqlOperation} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import {listReagents} from '../src/graphql/queries'

function Reagents(){

    const []

    useEffect(() => {
        //feteches userID from aws
        const userID = Auth.currentUserInfo()
          .then(user => user.id)
          .catch(err => console.log(err));

        //fetech existing reagents to populate table
        
    }, []);

    return(
        <div>
            <AddReagentForm/>
            {/* {Table of existing reagents. Able to modify and delete. } */}
        </div>
    );
}

export default Reagents;