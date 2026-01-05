'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();

    return (
        <div className="terminal-container">
            <div className="terminal-window">

                <div>
                    <span>{pathname}: No such file or directory</span>
                    <br />
                    <span>[error_code: 404]</span>
                </div>
                <br />
                <div >
                    <br /><br />
                    <Link href="/" className="back_to_home">
                        go back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}