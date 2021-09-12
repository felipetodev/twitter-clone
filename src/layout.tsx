import React from 'react'
import { Box, Button, Container, Icon, Stack, StackDivider, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { mainLogoNav, asideLinksProperties } from './helpers'

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode()
  const { pathname } = useLocation()
  const logoColor = useColorModeValue('primary.500', undefined)
  return (
    <Container height='100%' paddingX={0} maxWidth='container.lg' alignSelf='center'>
      <Stack direction='row' divider={<StackDivider />} height='100%'>
        <Stack minWidth={72} paddingY={3} paddingX={6} spacing={8}>

          <Icon
            cursor='pointer'
            color={logoColor}
            w={6}
            h={6}
            as={mainLogoNav.icon}
            onClick={toggleColorMode}
          />

          <Stack spacing={6}>
            {asideLinksProperties.map(aside => (
              <Link to={aside.href} key={aside.title}>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={5}
                  color={pathname === aside.href ? 'primary.500' : 'inherit'}
                >
                  <Icon
                    as={pathname === aside.href ? aside.activeIcon : aside.inactiveIcon}
                    w={6}
                    h={6}
                  />
                  <Text fontWeight='bold' fontSize='lg'>
                    {aside.title}
                  </Text>
                </Stack>
              </Link>
            ))}
          </Stack>

          <Button colorScheme='primary' size='lg' width='100%'>
            Twittear
          </Button>

        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  )
}

export default Layout
