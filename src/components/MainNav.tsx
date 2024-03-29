import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface MainNavProps {
  pathName: string
}

const MainNav: FunctionComponent<MainNavProps> = (props) => {
  const { pathName } = props
  const pathname = new URL(pathName).pathname

  const links = [
    { href: '/', text: 'Home' },
    { href: '/services/', text: 'Services' },
    { href: '/about/', text: 'About' }
  ]

  return (
    <Popover>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="/">
                <span className="sr-only">Artellectual</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/logo.svg"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {links.map((link) => {
              const className = `font-medium ${pathname === link.href ? 'text-purple-600 hover:text-purple-500' : 'text-gray-900 hover:text-gray-900'}`

              return <a key={link.text} href={link.href} className={className}>
                {link.text}
              </a>
            })}
          </div>
          <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span className="inline-flex rounded-md shadow">
              <a
                href="https://launchpad.37signals.com/signin" target="_blank"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-purple-600 hover:text-purple-500"
              >
                Log in
              </a>
            </span>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/logo.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((link) => {
                const className = `block rounded-md px-3 py-2 text-base font-medium ${pathname === link.href ? 'text-gray-900 bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`

                return <a
                  key={link.text}
                  href={link.href}
                  className={className}
                >
                  {link.text}
                </a>
              })}
            </div>
            <a
              href="https://launchpad.37signals.com/signin" target="_blank"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-puprle-600 hover:bg-gray-100 hover:text-purple-700"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MainNav