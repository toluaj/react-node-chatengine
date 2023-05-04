import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

interface UserType {
    username: string
    secret: string
}

interface ChatProps{
    user: UserType
}

const ChatPage = ({ user }: ChatProps) => {
  const chatProps = useMultiChatLogic(import.meta.env.VITE_CHATENGINE_PROJECT_ID, user.username, user.secret)

  return (
    <div style={{ height: "100vh" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} />
    </div>
  )
}

export default ChatPage