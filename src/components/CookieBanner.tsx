import type { FunctionComponent } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCookies } from 'react-cookie'


const CookieBanner: FunctionComponent = (props) => {
  const [cookies, setCookie] = useCookies(['artellectual_consent'])

  function dismissCookieConsent() {
    setCookie('artellectual_consent', 'accepted')
  }

  if (cookies.artellectual_consent === "accepted") {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <p className="ml-3 mr-3 text-purple-600">
                <span>Continuing to use this site means you accept Terms and Conditions and Privacy Policy. We use cookies to ensure that we give you the best experience.</span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <button
                onClick={dismissCookieConsent}
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-500"
              >
                Accept
              </button>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                onClick={dismissCookieConsent}
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner