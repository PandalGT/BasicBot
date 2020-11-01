module.exports = (client) => {
    client.user.setPresence(
        {
            statu: "online",
            game: {
               name: 'no se tio',
               url: null,
               type: "PLAYING"
            }
        }
    ); 
}