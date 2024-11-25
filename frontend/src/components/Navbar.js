const Navbar = () => {

    return (
        <header>

            <div className="navbar">

                <h2 className="logo"><a href="/">sendthesong</a></h2>
                <div className="buttons">
                    <ul>
                        <li><a href="/submit">Submit</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>

            </div>

        </header>
    )

}

export default Navbar