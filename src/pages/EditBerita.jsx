import React, {useEffect} from "react";
import Layout from "./Layout";
import FormEditBerita from "../components/FormEditBerita";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth));

    useEffect(()=>{
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError){
        navigate("/admin/login");
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <FormEditBerita/>
        </Layout>
    );
};

export default EditProduct;