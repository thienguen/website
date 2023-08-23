import { useTheme } from 'next-themes'
import { Tooltip } from '../common/Tooltip'

const Profile = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Tooltip text="Start again!">
        <div
          className="cursor-pointer pb-3"
          onClick={() => {
            if (theme === undefined) {
              setTheme(theme === undefined ? 'dark' : theme === 'dark' ? 'dark' : 'light')
            }
            window.location.reload()
          }}
        >
          <img
            src="/images/monika.png"
            alt="Definitely not me!!"
            width={150}
            height={150}
            className=" rounded-full border-2 border-slate-800 dark:border-slate-400"
          />
        </div>
      </Tooltip>
    </>
  )
}

export default Profile
