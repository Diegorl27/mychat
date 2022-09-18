import React from 'react'
import { Avatar } from '@mui/material'
import { PeopleAltOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { nameInitials } from 'src/utils/helpers';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Console } from 'console';

interface AvatariconsProps {
  isGroup?: boolean
  isUndefined?: boolean
  margin?:string
  name?: string
  value?: number
  colorUser?:string
}



export const Avataricon = ({
  colorUser,
  isGroup = false,
  isUndefined = false,
  margin,
  name,
  value
}: AvatariconsProps) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const IsPair = (value % 2) == 0

  const sxOptions = {
    backgroundColor: colorUser ? colorUser : (isMobile || IsPair) ? 'var(--color-purple-400)' : 'var(--color-purple-100)',
    color: 'var(--color-purple-900)',
    fontSize: 'var(--font-size-xl)',
    fontWeight: 500,
    height: '40px',
    margin: margin,
    opacity: (isMobile && IsPair) ? (0.24) : ' ',
    width: '40px'
  }



  if (isGroup || isUndefined) {
    const icon = isGroup ? <PeopleAltOutlined /> : <PersonOutlineOutlined />
    return (
      <Avatar sx={sxOptions} alt={name}>
        {icon}
      </Avatar>
    )
  }

  return (
    <Avatar  sx={sxOptions} >
      {nameInitials(name)}
    </Avatar>
  )
}
