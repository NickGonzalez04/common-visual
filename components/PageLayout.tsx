import { Box } from '@chakra-ui/react'

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Box>{children}</Box>
    </div>
  );
}