import React from 'react'
import { Flex, Heading, Skeleton } from '@javaswap/uikit'
import getTimePeriods from 'utils/getTimePeriods'
import Timer from './Timer'

interface CountdownProps {
  nextEventTime: number
  preCountdownText?: string
  postCountdownText?: string
}

const Countdown: React.FC<CountdownProps> = ({ nextEventTime, preCountdownText, postCountdownText }) => {
  const secondsRemaining = (nextEventTime - (new Date().getTime()))/1000;
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <>
      {secondsRemaining ? (
        <Flex display="inline-flex" justifyContent="flex-end" alignItems="center">
          {preCountdownText && (
            <Heading mr="12px" color="primary">
              {preCountdownText}
            </Heading>
          )}
          <Timer
            minutes={minutes + 1} // We don't show seconds - so values from 0 - 59s should be shown as 1 min
            hours={hours}
            days={days}
          />
          {postCountdownText && <Heading color="primary">{postCountdownText}</Heading>}
        </Flex>
      ) : (
        <Skeleton height="41px" width="250px" />
      )}
    </>
  )
}

export default Countdown
