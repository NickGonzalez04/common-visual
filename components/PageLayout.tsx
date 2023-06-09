import { Box, Heading, VStack } from '@chakra-ui/react'

export default function PageLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <VStack spacing={8}>
      {/* <Heading>Common Visualizer</Heading> */}
      <Box>{children}</Box>
    </VStack>
  )
}
