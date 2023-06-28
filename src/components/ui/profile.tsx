import Image from 'next/image'

import { Tooltip } from '../common/Tooltip'

const Profile = () => {
  return (
    <>
      <Tooltip text='just monika'>
        <div>
          <Image
            src="/images/monika.png"
            alt="Definitely not me!!"
            width={250}
            height={250}
            className="rounded-full border-2 border-slate-800 dark:border-slate-400"
          />
        </div>
      </Tooltip>
    </>
  )
}

export default Profile
