import Header from '../Header'
import Footer from '../Footer'

import './styles.scss'

const Base = ({ children }) => (
    <div className="wrapper-base">
        <Header />
        <div className="content-wrapper">
            {children}
        </div>
        <Footer />
    </div>
)

export default Base