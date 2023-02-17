"use client"

import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Login() {
    return(
        <li className='list-none'>
            <button onClick={() => signIn()} className='text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25'>
              Sign In
            </button>
        </li>
    )
}