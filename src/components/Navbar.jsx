const Navbar = () => {
    return (
        <div className="navbar bg-base-100  container mx-auto">
            <div className="flex-1">
                <a className="text-xl font-semibold">CS-Ticket System</a>
            </div>
            <div className="flex items-center gap-6 justify-center">
                <ul className="flex items-center gap-6 justify-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                + New Ticket
                </button>
            </div>
        </div>
    )
}

export default Navbar