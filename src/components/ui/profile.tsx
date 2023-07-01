import Image from 'next/image'
const Profile = () => {
  return (
    <>
      <div>
        <Image
          src="/images/monika.png"
          alt="Definitely not me!!"
          width={225}
          height={225}
          className="animate-fade-in-2 rounded-full border-2 border-slate-800 dark:border-slate-400"
        />
      </div>
    </>
  )
}

export default Profile
