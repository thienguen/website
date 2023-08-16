import Image from 'next/image'

const Profile = () => {
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in pb-3 pt-6 opacity-0 [--animation-delay:1200ms]">
        <Image src="/images/monika.png" alt="Definitely not me!!" width={225} height={225} priority className=" rounded-full border-2 border-slate-800 dark:border-slate-400" />
      </div>
    </>
  )
}

export default Profile
