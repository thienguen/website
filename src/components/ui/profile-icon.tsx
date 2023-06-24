// components/ProfileIcon.tsx

import Image from 'next/image'

import classNames from 'classnames'

interface ProfileIconProps {
  src: string
  alt: string
  className?: string
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ src, alt, className }) => {
  const classes = classNames(
    'rounded-full shadow-lg border-2 border-white hover:border-blue-500 transition-colors duration-200',
    className as string
  )

  return (
    <div className={classes}>
      <Image src={src} alt={alt} className="rounded-full object-cover" />
    </div>
  )
}

export default ProfileIcon
