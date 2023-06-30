import logo from '../../assets/footer_logo.png';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="logo-footer">
                <img src={logo} alt="Logo Kasa" />
            </div>
            <div className="rights">
                <p>@Kasa. All rights reserved.</p>
            </div>
        </footer>
  );
}

export default Footer