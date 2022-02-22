import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/typedReduxHooks";
import { logOut } from "../../app/features/authSlice";
import { useEffect } from "react";
const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	const handelLogout = () => {
		dispatch(logOut());
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className='fixed z-50 w-full top-0'>
			<section className='bg-primary text-white flex justify-between px-10 items-center h-16  ' id='navbarId'>
				<div className='left flex space-x-10 items-center'>
					<Link to='/'>
						<h1 className='logo pointer text-3xl font-bold text-style  '>MDB</h1>
					</Link>
				</div>
				<div className='right flex sm:space-x-10 items-center text-lg '>
					{isAuthenticated ? (
						<div onClick={handelLogout} className='cursor-pointer'>
							<h1 className='pointer font-semibold'>Logout</h1>
						</div>
					) : (
						<Link to='/login'>
							<h1 className='pointer font-semibold'>Login</h1>
						</Link>
					)}
				</div>
			</section>
		</div>
	);
};

export default Navbar;
