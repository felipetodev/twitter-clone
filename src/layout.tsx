import React from 'react'
import { Box, Button, Container, Image, Icon, Stack, StackDivider, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { mainLogoNav, asideLinksProperties } from './helpers'
import { BsThreeDots } from 'react-icons/bs'

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode()
  const { pathname } = useLocation()
  const logoColor = useColorModeValue('primary.500', undefined)
  const userColor = useColorModeValue(undefined, 'white')

  const isActiveRoute = hash => pathname === hash.href

  return (
    <Container height='100%' paddingX={0} maxWidth='container.xl' alignSelf='center'>
      <Stack direction='row' divider={<StackDivider margin={0} />} height='100%' spacing={0}>
        <Stack justifyContent='space-between' maxWidth='275' width='100%'>
          <Stack paddingY={3} paddingX={7} spacing={8}>

            <Stack spacing={6}>
              <Icon
                cursor='pointer'
                color={logoColor}
                w={6}
                h={6}
                as={mainLogoNav.icon}
                onClick={toggleColorMode}
              />

              {asideLinksProperties.map(link => (
                <Link to={link.href} key={link.title}>
                  <Stack
                    direction='row'
                    alignItems='center'
                    spacing={5}
                    color={isActiveRoute(link) ? 'primary.500' : 'inherit'}
                  >
                    <Icon
                      as={isActiveRoute(link) ? link.activeIcon : link.inactiveIcon}
                      w={6}
                      h={6}
                    />
                    <Text fontWeight='bold' fontSize='lg'>
                      {link.title}
                    </Text>
                  </Stack>
                </Link>
              ))}
            </Stack>

            <Button colorScheme='primary' size='lg' width='100%'>
              Twittear
            </Button>

          </Stack>

          <Stack padding={4} direction='row' alignItems='center' paddingY={4} justifyContent='space-between'>
            <Stack direction='row' alignItems='center'>
              <Image
                src='https://pbs.twimg.com/profile_images/1337964299424325632/C33IxdPV_normal.jpg'
                width={10}
                height={10}
                borderRadius={9999}
              />
              <Stack spacing={0}>
                <Text fontWeight='bold' color={userColor} fontSize='sm'>felipetodev</Text>
                <Text color='gray.500' fontWeight='500' fontSize='xs'>@felipeto</Text>
              </Stack>
            </Stack>
            <Icon as={BsThreeDots} />
          </Stack>

        </Stack>
        <Box width='100%'>{children}</Box>
      </Stack>
    </Container>
  )
}

export default Layout
