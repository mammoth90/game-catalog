import ListOfPlatforms from './ListOfPlatforms'
import styles from './Platfroms.module.scss'

import  Playstation  from './assets/playstation.svg?react'
import Xbox from './assets/xbox.svg?react'
import Nintendo from './assets/nintendo.svg?react'
import Android from './assets/android.svg?react'
import Mac from './assets/mac.svg?react'
import Linux from './assets/linux.svg?react'
import Pc from './assets/pc.svg?react'
import Sega from './assets/sega.svg?react'

const platformsCollection = [
  {
    id: 1,
    keyWord: 'playstation',
    icoSrc: Playstation,
    family: 'playstation',
  },
  {
    id: 2,
    keyWord: 'xbox',
    icoSrc: Xbox,
    family: 'xbox',
  },
  {
    id: 3,
    keyWord: ['nintendo', 'wii'],
    icoSrc: Nintendo,
    family: 'nintendo',
  },
  {
    id: 4,
    keyWord: 'android',
    icoSrc: Android,
    family: 'android',
  },
  {
    id: 5,
    keyWord: ['mac', 'ios'],
    icoSrc: Mac,
    family: 'mac',
  },
  {
    id: 7,
    keyWord: 'linux',
    icoSrc: Linux,
    family: 'linux',
  },
  {
    id: 8,
    keyWord: 'pc',
    icoSrc: Pc,
    family: 'pc',
  },
  {
    id: 10,
    keyWord: ['dreamcast', 'gamecube'],
    icoSrc: Sega,
    family: 'sega',
  },
]
const Platforms = ({ platforms }) => {
  const availablePlatforms = platforms.reduce((acc, p) => {
    acc[p.platform.slug] = [p.platform.name, p.platform.id]
    return acc
  }, {})
  const sortedListOfPlatforms = Object.entries(availablePlatforms).reduce(
    (acc, [keyWord, platformEntitie]) => {
      const currentPlatform = platformsCollection.find((pl) =>
        Array.isArray(pl.keyWord)
          ? pl.keyWord.some((alias) => keyWord.includes(alias))
          : keyWord.includes(pl.keyWord)
      )
      if (currentPlatform) {
        acc[currentPlatform.family] = {
          ...currentPlatform,
          names: [
            ...(acc[currentPlatform.family]?.names ?? []),
            platformEntitie,
          ],
        }
      }
      return acc
    },
    {}
  )
  const pl = Object.values(sortedListOfPlatforms)

  return (
    <div className={styles.container}>
      {pl.map((i) => {
        const Icon = i.icoSrc
        return (
          <div key={i.id} className={styles.icoDiv}>
            <Icon className={styles.ico} key={i.id} />
            <ListOfPlatforms names={i.names} />
          </div>
        )
      })}
    </div>
  )
}

export default Platforms
