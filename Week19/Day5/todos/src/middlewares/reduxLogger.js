

export const myReduxLogger = ( store ) => ( next ) => (action) => {
  console.log( 'prev state ====>', store.getState() );
  console.log('action ===>',action);
  
  next(action)
  console.log( 'next state ====>', store.getState() );
}
