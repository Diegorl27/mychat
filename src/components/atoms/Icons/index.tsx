import React from 'react'
import { MoreVert, ArrowBack, Search, ChatBubbleOutlineOutlined, SentimentSatisfiedAlt} from '@mui/icons-material/'

interface IconsProps {
  color: string
  margin?: string
  pos: number
  width: string
  height: string
}

export const Icons = ({
  color,
  margin,
  pos,
  height,
  width
}:IconsProps) => {

  const sxOptions = {
    color: color,
    margin: margin,
    width:(width),
    height:(height)
  }


  const iconsArr =[
    <ArrowBack sx={sxOptions} key={0}/>,
    <ChatBubbleOutlineOutlined sx={sxOptions} key={1}/>,
    <MoreVert sx={sxOptions} key={2}/>,
    <Search sx={sxOptions} key={3}/>,
    <SentimentSatisfiedAlt sx={sxOptions} key={4}/>,
  ]

  return (
    (iconsArr[pos])
  )
}
