import "../Header/Header.css"
import Image from 'next/image'
const Header = () =>{
    return <div className="header">
        <Image src="/header.jpg" className="img" width={100} height={100} alt="header-image" />
    </div>
}

export default Header;