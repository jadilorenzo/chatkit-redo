import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1e363060-6790-443f-9aec-ebb40c9eecaf/token"
})

const createChatManager = (userId) => {
  return new ChatManager({
    instanceLocator: "v1:us1:1e363060-6790-443f-9aec-ebb40c9eecaf",
    userId,
    tokenProvider: tokenProvider,
    // logger: {
    //   verbose: (...args) => console.log('log:', ...args),
    //   debug: (...args) => console.log('debug:', ...args),
    //   info: (...args) => console.log('info:', ...args),
    //   warn: (...args) => console.log('warn:', ...args),
    //   error: (...args) => console.log('error:', ...args)
    // }
  })
};

const chat = ({
  tokenProvider,

  createChatManager: (name = 'jacob') => createChatManager(name),

  connect: (userId, onLoaded, onMessage, roomId) => {
    console.log(roomId)
    createChatManager(userId).connect().then(currentUser => {
        onLoaded(currentUser)
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[roomId].id,
          hooks: {
            onMessage
          }
        })
      })
    return createChatManager(userId)
  }
})

export default chat
