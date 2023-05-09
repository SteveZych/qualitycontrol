import AddReagentForm from "../components/addReagentForm";
import {Auth, API, graphqlOperation} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import {listReagents} from '../src/graphql/queries'

function Reagents(){

    useEffect(() => {
        async function fetchdata(){
            //fetech existing reagents to populate table
            const currentReagents = await API.graphql(graphqlOperation(listReagents));
            console.log(currentReagents);
        }
            fetchdata();
        }, []);

    return(
        <div>
            <AddReagentForm/>
            {/* {Table of existing reagents. Able to modify and delete. } */}
            <table>
            </table>
        </div>
    );
}

export default Reagents;