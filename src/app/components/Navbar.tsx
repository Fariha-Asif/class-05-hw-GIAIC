import Image from "next/image"

export default function Navbar() {
    return(
        <div>
            <header>
                <nav className="bg-blue-900 h-16 flex items-center justify-between">
                    <div className="flex items-center ml-6">
                        <Image src="/images/logo.png" alt="logo" height={80} width={80} className="ml-4 pt-16"/>
                        <h1 className="text-blue-300 ml-20 font-bold font-700 text-2xl">Tution Free Educational Program on Latest Technologies</h1>
                    </div>
                    <ul className="flex space-x-12 text-white mr-6">
                        <li>Home</li>
                        <li>Apply</li>
                        <li>Jobs</li>
                        <li>Result</li>
                        <li>
                            <select id="Course" name="Course" className="bg-blue-900 text-white border-none">
                                <option value="Course">Course</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
