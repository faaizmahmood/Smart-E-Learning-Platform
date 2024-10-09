import { Routes, Route } from 'react-router-dom';

import CommingSoon from '../components/comingSoon/CommingSoon';
import LandingPage from '../components/landingPage/LandingPage';
import Signin from '../auth/signin/signin';
import Error from '../error/error';

const Router = () => {
    return (
        <>
            <Routes>

                <Route path="/comming-soon" element={<CommingSoon />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/signin" element={<Signin />} />
                <Route path="*" element={<Error />} />


            </Routes>
        </>
    )
}

export default Router