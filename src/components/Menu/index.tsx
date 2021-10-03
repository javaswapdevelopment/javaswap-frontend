import React from 'react'
import { Menu as UikitMenu } from '@javaswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceJavaUsdc } from 'state/farms/hooks'
import config from './config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import Countdown from './Countdown'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const javaPriceUsd = usePriceJavaUsdc()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      javaPriceUsd={javaPriceUsd.toNumber()}
      links={config(t)}
      profile={null}
      alert={<Countdown nextEventTime={1633478400000} preCountdownText="Coming Soon" postCountdownText="Go Presale" />}
      {...props}
    />
  )
}

export default Menu
