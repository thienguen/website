import Image from 'next/image'
const Profile = () => {
  return (
    <>
      <div className='pb-3 pt-6'>
        <Image
          src="/images/monika.png"
          alt="Definitely not me!!"
          width={225}
          height={225}
          priority
          className=" rounded-full border-2 border-slate-800 dark:border-slate-400"
        />
      </div>
    </>
  )
}

export default Profile
