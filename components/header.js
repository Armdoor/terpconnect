import Link from "next/link";
export default async function Header() {

    return (
      <div className="bg-black container flex items-center justify-between mx-auto  text-white py-5 px-9">
        <ul className="flex tems-center lsit-reset">
            <li>
                <Link href="">Home</Link>
            </li>
            <li>
                <Link href="">About</Link>
            </li>
            <li>
                <Link href="">Resources</Link>
            </li>
            <li>
                <Link href="">Events</Link>
            </li>
            <li>
                <Link href="">Register</Link>
            </li>
        </ul>
      </div>
    );
  }