import Link from 'next/link'
import Button from './Button'
import styles from '../styles/Home.module.css'

export default function AppBar() {
    return(
        <nav className={`flex ${styles.navbar} fixed w-full flex-row p-4 gap-4 justify-between rounded-br-lg rounded-bl-lg items-center`}>
            <Link href={'/'}>
                <a className='flex flex-row text-sm text-black'>BDE<span className='hidden md:flex'> - Campus Riera</span></a>
            </Link>
            <div className="flex flex-row gap-4">
                <Button content={`Contact`} link={`/contact`}/>
                <Button content={`Voter`} link={`/voter`}/>
            </div>
        </nav>
    )
}