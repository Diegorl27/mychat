import { UserStatus, UserTypes, SubjectTypes, MessageStatus } from './../const/index';



export interface IChats {
  chats: IMessagges
  name: string
  phone: string
  status: UserStatus.ACTIVE | UserStatus.TEXTING | UserStatus.OFFLINE
  registered: boolean
  type: UserTypes.CONTACT | UserTypes.GROUP
}

export interface IMessagges {
  message: string
  type: SubjectTypes.RECEIVER | RECEIVER.TRANSMITTER
  date: string,
  status: MessageStatus.SEEN | MessageStatus.DELIVERED | MessageStatus.SEND
}

