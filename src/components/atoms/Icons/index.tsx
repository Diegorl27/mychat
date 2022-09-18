import React from 'react'
import { MoreVert, ArrowBack, Search} from '@mui/icons-material/'

interface IconsProps {
  color: string
  pos: number
  width: number
  weight: number
}

export const Icons = ({
  color,
  pos,
  weight,
  width
}:IconsProps) => {

  const sxOptions = {
    color:(color),
    width:(width),
    weight:(weight)
  }


  const iconsArr =[
    <ArrowBack sx={sxOptions} key={1}/>,
    <MoreVert sx={sxOptions} key={0}/>,
    <Search sx={sxOptions} key={2}/>
  ]

  return (
    (iconsArr[pos])
  )
}
