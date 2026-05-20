import ListOfPlatforms from './ListOfPlatforms'
import styles from './Platfroms.module.scss'
import playstation from './assets/playstation.svg'
import xbox from './assets/xbox.svg'
import nintendo from './assets/nintendo.svg'
import android from './assets/android.svg'
import mac from './assets/mac.svg'
import linux from './assets/linux.svg'
import pc from './assets/pc.svg'
import sega from './assets/sega.svg'

const platformsCollection = [
  {
    id: 1,
    keyWord: 'playstation',
    icoSrc: playstation,
    family: 'playstation',
  },
  {
    id: 2,
    keyWord: 'xbox',
    icoSrc: xbox,
    family: 'xbox',
  },
  {
    id: 3,
    keyWord: ['nintendo', 'wii'],
    icoSrc: nintendo,
    family: 'nintendo',
  },
  {
    id: 4,
    keyWord: 'android',
    icoSrc: android,
    family: 'android',
  },
  {
    id: 5,
    keyWord: ['mac', 'ios'],
    icoSrc: mac,
    family: 'mac',
  },
  {
    id: 7,
    keyWord: 'linux',
    icoSrc: linux,
    family: 'linux',
  },
  {
    id: 8,
    keyWord: 'pc',
    icoSrc: pc,
    family: 'pc',
  },
  {
    id: 10,
    keyWord: ['dreamcast', 'gamecube'],
    icoSrc: sega,
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
        return (
          <div key={i.id} className={styles.icoDiv}>
            <img className={styles.ico} key={i.id} src={i.icoSrc} />
            <ListOfPlatforms names={i.names} />
          </div>
        )
      })}
    </div>
  )
}

export default Platforms
