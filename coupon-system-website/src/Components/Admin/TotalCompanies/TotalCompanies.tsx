import { useEffect, useState } from 'react';
import "./TotalCompanies.css";
import axios from 'axios';
import urlService from '../../../Services/UrlService';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store';

function TotalCompanies(): JSX.Element {

    const total = useSelector((state: RootState) => state.companyReducer.companies.length);


    return (
        <div className="TotalCompanies">
            {(total === 0) ? <p> No Companies </p> : <p> Total Companies : {total}</p>}
        </div>
    );
}

export default TotalCompanies;
