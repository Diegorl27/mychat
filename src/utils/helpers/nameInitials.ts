export const nameInitials = (name:string):string => {

  const nameArr = name.split(' ')
  let initials = ''

  nameArr.forEach((word)=>{
    initials+=word[0]
  })
  return initials
}