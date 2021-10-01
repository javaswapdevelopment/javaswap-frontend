import React from 'react'
import { Heading, Flex, Text } from '@javaswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-start"
      mt={[null, null, null, '64px']}
    >
      <Heading color="brownTitle" scale="xl">{headingText}</Heading>

      <Text maxWidth="232px" color="textSubtle">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
