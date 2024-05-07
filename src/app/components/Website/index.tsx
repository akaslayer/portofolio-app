import React from 'react'
import WebsiteList from './components/WebsiteList'
import { DUMMY_WEBSITE } from '@/app/utils/DummyData'

const Website = () => {
  return (
    <>
      <div className='bg-white'>
        <div className='flex flex-col gap-10'>
          <div className=' overflow-x-scroll no-scrollbar w-screen'>
            <div className='website--item flex w-max '>
              {DUMMY_WEBSITE[0].map((website) => (
                <div className='' key={website.id}>
                  <WebsiteList {...website} />
                </div>
              ))}
              {DUMMY_WEBSITE[0].map((website) => (
                <div key={website.id}>
                  <WebsiteList {...website} />
                </div>
              ))}
            </div>

          </div>
          <div className='overflow-x-scroll w-screen no-scrollbar'>
            <div className='website--item--2 flex w-max  flex-row-reverse'>
              {DUMMY_WEBSITE[1].map((website) => (
                <div className=' ' key={website.id}>
                  <WebsiteList {...website} />
                </div>
              ))}
              {DUMMY_WEBSITE[1].map((website) => (
                <div key={website.id}>
                  <WebsiteList {...website} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Website