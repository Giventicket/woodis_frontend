import {useEffect, useCallback} from "react";
import {LoginForm} from "../components";
import { useDispatch} from 'react-redux';
import {change_id, change_password, reset} from '../modules/login';


const LoginFormContainer = () => {
	const dispatch = useDispatch();
	const onChangeId = useCallback(id => dispatch(change_id(id)), [dispatch]);
	const onChangePassword = useCallback(password => dispatch(change_password(password)), [dispatch]);
	
	useEffect(()=>{
		dispatch(reset());
	}, []);
	
    return (<LoginForm onChangeId={onChangeId} onChangePassword={onChangePassword}/>);
};

export default LoginFormContainer;