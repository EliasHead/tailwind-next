import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Porfile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <Image
        className="rounded-full"
        src="https://github.com/EliasHead.png"
        width={40}
        height={40}
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Elias Costa</span>
        <span className="trucante text-sm text-zinc-500">
          eliashead.costa@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
