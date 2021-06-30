import React from 'react'

import Navbar from "components/Navbar/Navbar";
import TreeRoutes from "components/TreeRoutes/TreeRoutes";

import './FormContainer.scss'

const FormContainer = () => {
    return (
        <div className='app-form-container'>
            <Navbar />
            <TreeRoutes />
        </div>
    )
}

export default FormContainer
