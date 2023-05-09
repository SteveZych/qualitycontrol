import React, {useState, useEffect} from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {createReagent} from '../src/graphql/mutations';
import awsconfig from '../src/aws-exports';


const AddReagentForm = () => {

    //State to keep track of the form
    const [reagent, setReagent] = useState({
        name: "",
        qualityControlInterval: ""
    });

    const qualityControlIntervalOptions = ["Once","Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reagentParams = {
            input: reagent,
        };

        const result = await API.graphql({
            query: createReagent,
            variables: { reagentParams },
            authMode: GRAPHQL_AUTH_MODE.AWS_IAM
          });
        
        // const result = await API.graphql(graphqlOperation(createReagent, reagentParams));
        
    }

    return(
        <div>
            <form className="" onSubmit={handleSubmit}>
                <div className="reagentName-form">
                    <p><label htmlFor="reagentName">Reagent Name</label></p>
                    <p><input
                        name="reagentName"
                        type="text"
                        value={reagent.name}
                        placeholder="Reagent Name"
                        onChange={(e) => setReagent({ ...reagent, name: e.target.value })}
                        required
                    /></p>
                </div>
                <div>
                    <select onChange={(e) => setReagent({ ...reagent, qualityControlInterval: e.target.value })}>
                        {qualityControlIntervalOptions.map((option, index) =>{
                            return <option key={index}>{option}</option>
                        })}
                    </select>
                </div>
                <div className="submit-form">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default AddReagentForm;